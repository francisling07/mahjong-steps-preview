/* Zero-dependency lightweight Web Audio sound synthesizer for Mahjong table feedback.
   Safely no-ops in headless / Node VM environments or when muted. */
(function (global) {
  'use strict';

  const KEY = 'mj-sound-enabled';
  let ctx = null;
  let enabled = true;

  try {
    const saved = global.localStorage && global.localStorage.getItem(KEY);
    if (saved === '0') enabled = false;
  } catch (_) {}

  function ensureContext() {
    if (!enabled) return null;
    const AudioCtx = global.AudioContext || global.webkitAudioContext;
    if (typeof AudioCtx !== 'function') return null;
    try {
      if (!ctx) ctx = new AudioCtx();
      if (ctx.state === 'suspended' && typeof ctx.resume === 'function') {
        ctx.resume().catch(() => {});
      }
      return ctx;
    } catch (_) {
      return null;
    }
  }

  function tone(ac, freq, duration, type, gainPeak, delay) {
    const now = ac.currentTime + (delay || 0);
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.type = type || 'triangle';
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(gainPeak, now + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(gain);
    gain.connect(ac.destination);
    osc.start(now);
    osc.stop(now + duration + 0.01);
  }

  function clack(ac, freq, gainPeak) {
    const now = ac.currentTime;
    // Short percussive woody click using filtered noise + resonant sine tap.
    const length = Math.max(1, Math.floor(ac.sampleRate * 0.032));
    const buffer = ac.createBuffer(1, length, ac.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (length * 0.25));
    }
    const noise = ac.createBufferSource();
    noise.buffer = buffer;
    const filter = ac.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(freq || 1400, now);
    filter.Q.setValueAtTime(2.2, now);
    const gain = ac.createGain();
    gain.gain.setValueAtTime(gainPeak || 0.14, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ac.destination);
    noise.start(now);
    tone(ac, (freq || 1400) * 0.42, 0.045, 'triangle', (gainPeak || 0.14) * 0.45, 0);
  }

  function play(kind) {
    const ac = ensureContext();
    if (!ac) return;
    try {
      if (kind === 'select') {
        clack(ac, 1850, 0.06);
      } else if (kind === 'draw') {
        clack(ac, 1250, 0.07);
      } else if (kind === 'discard') {
        clack(ac, 1050, 0.14);
      } else if (kind === 'prompt') {
        tone(ac, 587.33, 0.12, 'sine', 0.07, 0);
        tone(ac, 783.99, 0.16, 'sine', 0.07, 0.08);
      } else if (kind === 'claim') {
        clack(ac, 1400, 0.14);
        tone(ac, 523.25, 0.11, 'triangle', 0.08, 0.02);
        tone(ac, 659.25, 0.16, 'triangle', 0.08, 0.09);
      } else if (kind === 'win') {
        [523.25, 659.25, 783.99, 1046.5].forEach((f, idx) => {
          tone(ac, f, 0.24, 'triangle', 0.09, idx * 0.085);
        });
      }
    } catch (_) {}
  }

  function isEnabled() {
    return enabled;
  }

  function setEnabled(next) {
    enabled = !!next;
    try {
      if (global.localStorage) global.localStorage.setItem(KEY, enabled ? '1' : '0');
    } catch (_) {}
    if (enabled) play('select');
    return enabled;
  }

  function toggle() {
    return setEnabled(!enabled);
  }

  const api = { play, isEnabled, setEnabled, toggle };
  global.MahjongSound = api;
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);

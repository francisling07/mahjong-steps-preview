"""User-owned LAN HTTPS server for the static Mahjong Steps preview."""

from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import ssl

BASE = Path(__file__).resolve().parent
SITE = BASE / "current"
CERT = BASE / "tls" / "server.crt"
KEY = BASE / "tls" / "server.key"


class Handler(SimpleHTTPRequestHandler):
    def list_directory(self, path):
        self.send_error(404)
        return None

    def end_headers(self):
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


if __name__ == "__main__":
    if not (SITE / "index.html").is_file():
        raise SystemExit("Missing current/index.html")
    server = ThreadingHTTPServer(("0.0.0.0", 8443), partial(Handler, directory=str(SITE)))
    server.daemon_threads = True
    context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
    context.minimum_version = ssl.TLSVersion.TLSv1_2
    context.load_cert_chain(CERT, KEY)
    server.socket = context.wrap_socket(server.socket, server_side=True)
    server.serve_forever()

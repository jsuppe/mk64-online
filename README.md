# MK64 Online — player showcase

Standalone player-facing site for the unofficial MK64 NetPak64 project.

Live: https://jsuppe.github.io/mk64-online/

The engineering showcase remains at https://jsuppe.github.io/netpak64/.

## Preview

Run `python3 -m http.server 8080` here and open http://localhost:8080/.
Plain HTML/CSS with a small screenshot-viewer script; no build step. GitHub
Pages publishes the main branch root.

## Content rules

- Development footage is not a finished-player-experience claim.
- Label CPU automation and known driving/camera limitations.
- Do not distribute ROMs, game-asset dumps, private environment details, or credentials.
  The requested title logo and character portraits are documented in `docs/MEDIA.md`.
- Keep setup status honest; only publish tested player-ready instructions.
- Claim real-console support only after verified physical end-to-end play.
- See `docs/` for the driving qualification plan and original site brief.

## Mod-site presentation

Use direct, technical mod-community writing rather than marketing slogans.
The site includes four original development videos, eight expandable screenshots,
source-level networking notes, build checksums, and a known-bug register.
Keep measurements tied to the exact development run and show unresolved issues.

The actual in-game title logo and original character portraits were added at
the user's request; source attribution is in `docs/MEDIA.md`. Item icons are
original game-inspired artwork. Screenshots are resized frames from public recordings.
Russo One and Press Start 2P are self-hosted; their OFL licenses are in
`assets/fonts/`. See `docs/MEDIA.md` for screenshot provenance.

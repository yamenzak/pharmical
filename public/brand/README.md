# Pharmical brand assets

Drop your own PNG files in this folder using the exact filenames below. The site will use them automatically and fall back to built-in SVG logos when a file is missing.

## File names

| Filename                        | Used for                                              | Recommended size              | Notes                                                                 |
| ------------------------------- | ----------------------------------------------------- | ----------------------------- | --------------------------------------------------------------------- |
| `logo-mark.png`                 | Square M mark (nav, footer, favicon-style spots)      | 512×512 PNG, transparent bg   | The gradient "M" icon only — no wordmark.                             |
| `logo-wordmark-light.png`       | Wordmark used **on light backgrounds**                | 1024×220 PNG, transparent bg  | `PHARMICAL` text in dark/black, gradient M on the left.               |
| `logo-wordmark-dark.png`        | Wordmark used **on dark backgrounds**                 | 1024×220 PNG, transparent bg  | `PHARMICAL` text in white, gradient M on the left.                    |
| `favicon.png` *(optional)*      | Browser tab icon (overrides `favicon.svg` if present) | 512×512 PNG                   | Same artwork as `logo-mark.png` is fine.                              |
| `og-image.png` *(optional)*     | Social share card                                     | 1200×630 PNG                  | Wordmark + tagline on a brand-gradient background works well.         |

## Fallbacks

If any file is missing, the site automatically uses the built-in SVG logos (a gradient M mark + `PHARMICAL` text rendered as web font). You can ship without dropping any files in — they just elevate the brand fidelity.

## Tips

- Use PNG with transparent backgrounds for the mark + wordmark so they blend with both themes.
- Export at 2× the displayed size to look crisp on retina displays (the table above already shows 2× sizes).
- Keep file sizes under 200 KB each so the site loads fast.

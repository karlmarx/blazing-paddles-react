import fs from 'fs';
import path from 'path';

// ─── File Registry ──────────────────────────────────────────────
// Add entries here as you add more downloadable files.
// The key is the token used in the URL: /api/download/<token>
//
// Store actual files in the /files directory at your project root.
// They stay outside /public, so they're never directly browsable.
//
const FILE_REGISTRY = {
  // Example: yoursite.com/api/download/BP-MHB
  'BP-MHB': {
    filename: 'Member-Handbook-ver-7.5d.pdf',
    contentType: 'application/pdf',
    // Optional: force download instead of inline preview
    forceDownload: true,
  },

  // ── Add more files below ──────────────────────────────────────
  // 'pricing-sheet': {
  //   filename: 'pricing-2026.pdf',
  //   contentType: 'application/pdf',
  //   forceDownload: true,
  // },
  // 'sample-data': {
  //   filename: 'sample.csv',
  //   contentType: 'text/csv',
  //   forceDownload: true,
  // },
};

// ─── Handler ────────────────────────────────────────────────────
export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { token } = req.query;
  const entry = FILE_REGISTRY[token];

  if (!entry) {
    return res.status(404).json({ error: 'File not found' });
  }

  const filePath = path.join(process.cwd(), 'files', entry.filename);

  if (!fs.existsSync(filePath)) {
    console.error(`File missing on disk: ${filePath}`);
    return res.status(404).json({ error: 'File not found' });
  }

  const stat = fs.statSync(filePath);
  const fileBuffer = fs.readFileSync(filePath);

  // Security: prevent caching of private files
  res.setHeader('Cache-Control', 'private, no-store');
  res.setHeader('Content-Type', entry.contentType);
  res.setHeader('Content-Length', stat.size);

  // noindex so search engines don't index the download response
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');

  const disposition = entry.forceDownload ? 'attachment' : 'inline';
  res.setHeader(
    'Content-Disposition',
    `${disposition}; filename="${entry.filename}"`
  );

  return res.send(fileBuffer);
}
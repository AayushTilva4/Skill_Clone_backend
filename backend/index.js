import app from './src/utils/app.js';

const PORT = process.env.PORT || 5000; // Use Render's PORT or fallback to 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} at ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`);
});

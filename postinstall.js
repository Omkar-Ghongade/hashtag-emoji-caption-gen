import { pipeline } from '@xenova/transformers';

async function runScript() {
  const captioner = await pipeline('image-to-text', 'Xenova/vit-gpt2-image-captioning');
  // Do something with captioner
}

runScript().catch(error => {
  console.error('Error during postinstall:', error);
  process.exit(1);
});

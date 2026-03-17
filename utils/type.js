export async function type(text, speed = 15) {
  for (const char of text) {
    process.stdout.write(char)
    await new Promise(r => setTimeout(r, speed))
  }
  console.log()
}

export async function loading(text = "Loading") {
  const frames = ["⠋","⠙","⠹","⠸","⠼","⠴","⠦","⠧","⠇","⠏"]

  for (let i = 0; i < 25; i++) {
    process.stdout.write(`\r${frames[i % frames.length]} ${text}`)
    await new Promise(r => setTimeout(r, 60))
  }

  process.stdout.write("\r")
}

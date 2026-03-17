#!/usr/bin/env node

import gradient from "gradient-string"

import { about } from "../commands/about.js"
import { help } from "../commands/help.js"
import { contact } from "../commands/contact.js"
import { experience } from "../commands/experience.js"
import { skills } from "../commands/skills.js"
import { projects } from "../commands/projects.js"
import { justkeOS} from "../commands/justkeOS.js"
import { ketsu } from "../commands/ketsu.js"
import { services } from "../commands/services.js"

//usar esse comando para iniciar o projeto("npm install link chalk figlet gradient-string")
//https://www.npmjs.com/package/gradient-string(configurações do gradient-string)
//baixar para deixar bonito ksksksks
//ir no site ("https://patorjk.com/software/taag/")
//usar a font ANSI Shadow
//colocar texto
//help
const command = process.argv[2]
if (!command) {
  console.log(gradient(['red', 'orange']).multiline(`
     ██╗██╗   ██╗███████╗████████╗██╗  ██╗███████╗     ██████╗██╗     ██╗
     ██║██║   ██║██╔════╝╚══██╔══╝██║ ██╔╝██╔════╝    ██╔════╝██║     ██║
     ██║██║   ██║███████╗   ██║   █████╔╝ █████╗      ██║     ██║     ██║
██   ██║██║   ██║╚════██║   ██║   ██╔═██╗ ██╔══╝      ██║     ██║     ██║
╚█████╔╝╚██████╔╝███████║   ██║   ██║  ██╗███████╗    ╚██████╗███████╗██║
 ╚════╝  ╚═════╝ ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚══════╝     ╚═════╝╚══════╝╚═╝
`)
  )
  console.log(`
┌─────────────────────────────┐
│   Bem Vindo ao JUSTKE CLI   │
└─────────────────────────────┘
Seja bem vindo ao JUSTKE CLI, uma ferramenta de linha de comando para você me conhecer melhor e se divertir com meus comandos. Para começar, digite "justke help" para ver a lista de comandos disponíveis. Aproveite!
`)
}
switch (command) {
  case "about":
    about()
    break
  case "help":
    help()
    break
  case "contact":
    contact()
    break
  case "experience":
    experience()
    break
  case "skills":
    skills()
    break
  case "projects":
    projects()
    break
  case "justke0S":
    justkeOS()
    break
  case "ketsu":
    ketsu()
    break
  case "services":
    services()
    break
  default:
    console.log("Comando não reconhecido. Digite 'justke help' para ver a lista de comandos disponíveis.")
}

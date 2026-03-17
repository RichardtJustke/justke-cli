#!/usr/bin/env node

import inquirer from "inquirer"

import { about } from "../commands/about.js"
import { help } from "../commands/help.js"
import { contact } from "../commands/contact.js"
import { experience } from "../commands/experience.js"
import { skills } from "../commands/skills.js"
import { projects } from "../commands/projects.js"
import { justkeOS } from "../commands/justkeOS.js"
import { ketsu } from "../commands/ketsu.js"
import { services } from "../commands/services.js"

import { boot } from "../utils/boot.js"
import { loading } from "../utils/loading.js"

const command = process.argv[2]

async function runCommand(cmd) {
  await loading("Executando comando")

  switch (cmd) {
    case "about":
      await about()
      break
    case "projects":
      await projects()
      break
    case "skills":
      await skills()
      break
    case "services":
      await services()
      break
    case "experience":
      await experience()
      break
    case "ketsu":
      await ketsu()
      break
    case "justkeOS":
      await justkeOS()
      break
    case "contact":
      await contact()
      break
    case "help":
      await help()
      break
    default:
      console.log("Comando não reconhecido.")
  }
}

async function start() {
  await boot()

  if (!command) {
    const answer = await inquirer.prompt([
      {
        type: "list",
        name: "cmd",
        message: "Escolha um comando:",
        choices: [
          "about",
          "projects",
          "skills",
          "services",
          "experience",
          "ketsu",
          "justkeOS",
          "contact",
          "help"
        ]
      }
    ])

    await runCommand(answer.cmd)
  } else {
    await runCommand(command)
  }
}

start()

---
id: 'getting-started-what-is-app-builder'
sidebar_label: 'What is App Builder'
redirect_from: '/frontend/getting-started/what-is-app-builder'
slug: '/projects/frontend/getting-started/what-is-app-builder'
---

# What is App Builder?

Learn how App Builder works and why it's useful.

---

## Why App Builder?

Developing web applications can be complicated and time-consuming work. You need to be a skilled developer with years of experience to create something that's both functional and visually appealing.

Not only do you have to be a skilled developer, but you also need to know the right programming languages, frameworks, and libraries to build an app that will work. Even then, there's no guarantee that it will look good or be easy for your customers to use.

This is why we developed App Builder, which lets you quickly create beautiful web applications. App Builder developers can quickly put together internal or customer-facing applications using our library of components by providing an easy-to-use drag-and-drop interface. Meanwhile, they can still drop into code and write JavaScript when required.

That said, how does it work?

## The App Builder Editor

![The App Builder Editor](./_images/app-builder-editor-1.png)

As a developer working in App Builder, you'll spend most of your time in the App Builder Editor after creating a project. The editor is where you'll be able to create application pages, configure routes, drag-and-drop components, configure components, connect to data sources, write JavaScript functions, and a whole lot more! Essentially, it's your application's command center and development environment, whether you're working on your own or a team.

The application you build inside the editor is **not your built application**. Think of it as an interactive preview of your application that 8base provides so that you have a highly engaging and interactive development environment. Meanwhile, all the changes and customizations you make to your application get stored in a catalog of Domain Specific Language (DSL) files that 8base maintains and manages. These DSL files collectively represent your application and are created/updated based on your actions in the editor.

At any point in the development process, you can deploy your application to a public endpoint so its intended users can access it. How does this happen?

## Build and Deploy

The DSL files created when working in the App Builder Editor get compiled upon deployment. Currently, App Builder compiles the DSL into a React.js application that's then ushered through a build and deploy process which mirrors that of using the framework natively.

This means that after the DSL code is compiled into – or generates – React.js application code. 8base then spins up a process that runs the `build` command, which outputs a compiled web application ready to be deployed. App Builder handles deployment by uploading the code files to an S3 bucket configured with a public URL. Your application is then available to users!

## What Can I Build Using App Builder?

A stated, App Builder lets you quickly create beautiful web applications. You may be wondering though, "what kind of web applications?" In the next section, we'll break how App Builder allows the development of go-to-market applications across all industry verticles – like finance, health-care, social networks, software as a service (SaaS) and others.

import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Profile" />
    <div style={{ maxWidth: `160px`, marginBottom: `1.45rem` }}>
        <StaticImage
          src="../images/pp.jpg"
          alt="profile"
          className="rounded-md"
        />
    </div>
    <div className="border-b border-solid border-b-black">
      <h1 class="font-bold text-4xl mb-2">Hendriyan Ogivano</h1>
      <small className="text-sm">Software Engineer</small>
      <div className="pb-4 pt-6">
        <p className="text-gray-800 mb-4">Hi, I'm Hendri, currently I'm working as a Frontend Engineer in <a href="https://schoters.com" target="_blank">Schoters</a>,
        mainly develop an application for study academy administration, and implementation with third parties such as <a href="https://www.syncfusion.com/javascript-ui-controls" target="_blank">syncfusion</a>,
        <a href="https://marketplace.zoom.us/docs/sdk/video/introduction/" target="_blank"> zoom sdk</a>.</p>
        <p className="mb-4">
        I also love working on freelance projects because I can develop my skills and communication with clients,
        by working freelance I also handle backend, server, and troubleshoot a product.
        </p>
        <p>
          Documentation as a Frontend Engineer : <a href="https://docs.google.com/document/d/1gT66IH_SjduyrDrZ9C0qfvi9B3FZSxoVpHrz36RRCYs/edit?usp=sharing" target="_blank">Here</a>
        </p>
      </div>
      <div class="py-4">
        <h2 class="font-semibold text-2xl mb-2">Get In Touch!!</h2>
        <ul className="list-disc pl-6 text-gray-800">
          <li className="text-gray-800">Email: <a href="mailto:me@hogivano.web.id"><code>me[at]hogivano[dot]web[dot]id</code></a></li>
          <li className="text-gray-800">Github: <a href="https://github.com/hogivano">https://github.com/hogivano</a></li>
          <li className="text-gray-800">LinkedIn: <a href="https://www.linkedin.com/in/hogivano/">https://www.linkedin.com/in/hogivano</a></li>
          <li className="text-gray-800">Instagram: <a href="https://instagram.com/hogivano">https://instagram.com/hogivano</a></li>
        </ul>
      </div>
    </div>
    <div class="py-4">
      <h2 class="font-semibold text-2xl mb-4">Portfolio</h2>
      <div>
        <div className="pb-2 py-4 border-b border-solid border-gray-200">
          <h3 className="text-xl font-medium">Video Conference (April 2022)</h3>
          <div className="py-4">
            <StaticImage
              src="../images/portfolio/zoom-video.png"
              alt="zoom video"
              className="rounded-md w-full mb-2"
            />
            <p className="mb-2">
              Develop video conference by own using a third party, namely the Zoom Video SDK.
              In the development that needs to be considered are functions such as a microphone, camera, screen share, and recording. Also, attention to the performance of the application.
            </p>
            <small className="text-sm block mb-2"><b>Total Team : </b> 10+</small>
            <small className="text-sm block mb-1"><b>URL : </b> Private</small>
            <small className="text-sm"><b>Stack :</b> <a href="https://nuxtjs.org/" target="_blank">nuxt.js</a>, <a href="https://tailwindcss.com/" target="_blank">tailwindcss</a>,
            <a href="https://marketplace.zoom.us/docs/sdk/video/introduction/" target="_blank"> zoom video sdk</a></small>
          </div>
        </div>
        <div className="pb-2 py-4 border-b border-solid border-gray-200">
          <h3 className="text-xl font-medium">Hospital Mobile App (2021 - 2022)</h3>
          <div className="py-4">
            <StaticImage
              src="../images/portfolio/widodo-apps.png"
              alt="widodo application"
              className="rounded-md w-full mb-2"
            />
            <p className="mb-2">
              This is a long-term project because it was built for a hospital in Ngawi Indonesia. In this project,
              I am a mobile developer using the vue.js framework with the capacitor.js package. In its development, there are many hospital bureaucratic problems that must be faced and solved with applications.
            </p>
            <small className="text-sm block mb-2"><b>Total Team : </b> 6</small>
            <small className="text-sm block mb-1"><b>URL : </b> Private</small>
            <small className="text-sm"><b>Stack :</b> <a href="https://vuejs.org/" target="_blank">vue.js</a>, <a href="https://www.typescriptlang.org/" target="_blank">typescript</a>, <a href="https://capacitorjs.com/" target="_blank">capacitor.js</a>,
            <a href="https://www.primefaces.org/" target="_blank"> primevue</a></small>
          </div>
        </div>
        <div className="pb-2 py-4 border-b border-solid border-gray-200">
          <h3 className="text-xl font-medium">Logistic Management System (2021)</h3>
          <div className="py-4">
            <StaticImage
              src="../images/portfolio/harapan-jaya.png"
              alt="harapan jaya"
              className="rounded-md w-full mb-2"
            />
            <p className="mb-2">
              This project is for the logistics management of goods using buses for large companies in Indonesia. In this project I'm a Frontend Engineer, the problem I'm facing is how the vue.js app can compile properly in the mobile app.
              In this project, for the first time, I used vue.js version 3, TypeScript, and clean architecture on the frontend. Details for documentation <a href="https://docs.google.com/document/d/1gT66IH_SjduyrDrZ9C0qfvi9B3FZSxoVpHrz36RRCYs/edit?usp=sharing" target="_blank">Here</a>
            </p>
            <small className="text-sm block mb-2"><b>Total Team : </b> 7-9</small>
            <small className="text-sm block mb-1"><b>URL : </b> Private</small>
            <small className="text-sm"><b>Stack :</b> <a href="https://vuejs.org/" target="_blank">vue.js</a>, <a href="https://www.typescriptlang.org/" target="_blank">typescript</a>, <a href="https://capacitorjs.com/" target="_blank">capacitor.js</a>,
            <a href="https://www.primefaces.org/" target="_blank"> primevue</a></small>
          </div>
        </div>
        <div className="pb-2 py-4 border-b border-solid border-gray-200">
          <h3 className="text-xl font-medium">Learning Mangement System (2020 - 2021)</h3>
          <div className="py-4">
            <StaticImage
              src="../images/portfolio/els.png"
              alt="els jamrkindo"
              className="rounded-md w-full mb-2"
            />
            <p className="mb-2">
              This is a long-term project, to build a learning management system for a government company, namely Jamkrindo. I'm a Full-Stack Developer who handles databases, servers and logical data to display in interfaces.
              The problem faced is that the previously long government bureaucracy has become short and dense through applications.
            </p>
            <small className="text-sm block mb-2"><b>Total Team : </b> 5</small>
            <small className="text-sm block mb-1"><b>URL : </b> <a href="https://jamkrindo.co.id/" target="_blank">Jamkrindo</a></small>
            <small className="text-sm"><b>Stack : </b><a href="https://www.php.net/" target="_blank">php</a>, <a href="https://laravel.com/docs/5.5" target="_blank">laravel</a>, <a href="https://www.postgresql.org/" target="_blank">postgresql</a>,
            <a href="https://www.nginx.com/" target="_blank"> nginx</a></small>
          </div>
        </div>
        <div className="pb-2 py-4 border-b border-solid border-gray-200">
          <h3 className="text-xl font-medium">Company Profile (2020)</h3>
          <div className="py-4">
            <StaticImage
              src="../images/portfolio/gitapramawisesa.png"
              alt="gitapramawisesa"
              className="rounded-md w-full mb-2"
            />
            <p className="mb-2">
              This project is for the company profile of music organizations at the University of Surabaya. I'm a Full-Stack Developer for handling backend and hosting to deploy the application.
            </p>
            <small className="text-sm block mb-2"><b>Total Team : </b> Byself</small>
            <small className="text-sm block mb-1"><b>URL : </b> <a href="https://gitapramawisesachoir.com/" target="_blank">Gitapramawisesachoir</a></small>
            <small className="text-sm"><b>Stack : </b><a href="https://www.php.net/" target="_blank">php</a>, <a href="https://laravel.com/docs/5.5" target="_blank">laravel</a>, <a href="https://www.mysql.com/">mysql</a></small>
          </div>
        </div>
        <div className="pb-2 py-4 border-b border-solid border-gray-200">
          <h3 className="text-xl font-medium">Recapitulation System (2020)</h3>
          <div className="py-4">
            <StaticImage
              src="../images/portfolio/sibutik.png"
              alt="sibutik"
              className="rounded-md w-full mb-2"
            />
            <p className="mb-2">
              This project was built for reporting mosquito larvae found in residents of the city of Sidoarjo.
              This project is for the Sidoarjo public health office. I'm a Full-Stack Developer to handling the dashboard admin and API for Mobile Application.
            </p>
            <small className="text-sm block mb-2"><b>Total Team : </b> 5</small>
            <small className="text-sm block mb-1"><b>URL : </b> Private</small>
            <small className="text-sm"><b>Stack : </b><a href="https://www.php.net/" target="_blank">php</a>, <a href="https://laravel.com/docs/5.5" target="_blank">laravel</a>, <a href="https://www.mysql.com/">mysql</a></small>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

<h1>Code Test Project</h1>

<h2>Description</h2>
<p>I was given the task of making a project that returns the data from the company API using a modern Front End library. I chose React JS. Due to CORS issues it was necessary to create a simple Node JS proxy server in order to get access to the data that the API returned.</p>

<h2>How to run the project</h2>
<ol>
	<li>Run npm install to retrieve all the packages used in the project.</li>
	<li>Start the server using the command npm run server.</li>
	<li>In a new terminal tab, run npm start.</li>
	<li>A browser window will appear with the running project.</li>
	<li>To run the tests created for the project you need to run the command, npm run test.</li>
</ol>

<h2>Main technologies used</h2>
<p>For the Back End proxy server, I used Node JS and the Epress JS framework. Whilst I have had some experience using these two technologies, this is the first time I have had to create a proxy server and I enjoyed the challenge.</p>
<p>The Front End of the project is built on React JS. I used the create react app package to initialise a standard base React application to build on. I added node-sass to the project, using my Sass skills. I think it is a better way of styling than plain css.</p>
<p>I have limited experience of writing JavaScript testing, so this was something I learned for this project. After research I decided that Enzyme and Chai were the main tools that could best support me with the implementation of tests. Following this research, I was able to use some tests.</p>

<h2>What I would improve if I had more time on the project</h2>
<ol>
<li>As Node and Express JS aren't tools I use on a day to day basis, I would spend more time tidying up this code. I would like to make better use of functions and generally make it more efficent.</li>
<li>With more time I would include additional testing. I enjoyed the challenge fo the testing. Testing the API and what it returns more thoroughly would be something I would develop further.</li>
<li>I think the naming conventions in the project could be improved. I think this is something that can be easily overlooked when creating a project, but it is essential to use clear naming conventions, especially if more than one person would be working on the project. </li>
</ol>

<h2>Overall</h2>
Overall, I feel the project was a success as I managed to create a working, good looking application that meets the main aim of the brief, return betting data from the API.
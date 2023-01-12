import axios from 'axios';
const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const topicsWrapper = document.createElement('div');
  const javaScript = document.createElement('div');
  const bootStrap = document.createElement('div');
  const technology = document.createElement('div');
  const jquery = document.createElement('div');
  const nodeJs = document.createElement('div');

  topicsWrapper.classList.add('topics');
  javaScript.classList.add('tab');
  bootStrap.classList.add('tab');
  technology.classList.add('tab');
  jquery.classList.add('tab');
  nodeJs.classList.add('tab');

  //topics.forEach( tab => { tab);})
  javaScript.textContent = topics[0];
  bootStrap.textContent = topics[1];
  technology.textContent = topics[2];
  jquery.textContent = topics[3];
  nodeJs.textContent = topics[4]



  topicsWrapper.appendChild(javaScript);
  topicsWrapper.appendChild(bootStrap);
  topicsWrapper.appendChild(technology);
  topicsWrapper.appendChild(jquery);
  topicsWrapper.appendChild(nodeJs);

  return topicsWrapper;
}
//console.log(Tabs(['Javascript','Bootstrap', 'Technology', 'JQuery', 'Node.js']));

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  let entry = document.querySelector(selector);
  axios.get('http://localhost:5001/api/topics').then(response => { 
  entry.appendChild(Tabs(response.data.topics))
  }).catch(err => {
  console.log(err)
  })
  

}

export { Tabs, tabsAppender }

const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const headerWrapper = document.createElement('div');
  const mdy = document.createElement('span');
  const bloomTechtimes = document.createElement('h1');
  const tempurature = document.createElement('span');

  headerWrapper.classList.add('header');
  mdy.classList.add('date');
  tempurature.classList.add('temp');

  mdy.textContent = date;
  bloomTechtimes.textContent = title;
  tempurature.textContent = temp;

  headerWrapper.appendChild(mdy);
  headerWrapper.appendChild(bloomTechtimes);
  headerWrapper.appendChild(tempurature);

  return headerWrapper;
}
//console.log(Header("Test", "01-01-23", "65F"));

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //


 let wrapper = document.querySelector(selector);

 wrapper.appendChild(Header('Bloomtech Times', '01-06-23', '65F'))
  //   wrapper.appendChild(date);
  //   wrapper.appendChild(title);
  //   wrapper.appendChild(temp);

  //   document.headerWrapper.appendChild(date)


  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!

}

export { Header, headerAppender }
//
let main = document.getElementById('publicationContainer'); 
// Fetch the JSON data
fetch('data.json')
  .then(response => response.json())
  .then(data =>{
    console.dir(data);
    console.log(data.comments[0].content);

    main.append(publicationDivGenerator(data,0));
    main.append(publicationDivGenerator(data,1));
  


  
  })
  .catch(error => console.error('Error fetching JSON:', error));


  /// create publication div /////
  const publicationDivGenerator = (data,i) =>{
    const publicationDiv = document.createElement('div');
    publicationDiv.className='publicationDiv';
    //top 
    const topDiv = document.createElement('div');
    topDiv.className='topDiv';
    const img = document.createElement('img');
    img.src =data.comments[i].user.image.png
    const pseudo = document.createElement('p');
    pseudo.textContent = data.comments[i].user.username;
    const date = document.createElement('p');
    date.textContent=data.comments[i].createdAt
    topDiv.append(img);
    topDiv.append(pseudo);
    topDiv.append(date)
    //middle
    let comment = document.createElement('p');
    comment.className='comment';
    comment.textContent=data.comments[i].content;
    //bottom
    const bottomDiv = document.createElement('div');
    bottomDiv.className='bottomDiv';
    const scoreDiv = document.createElement('div');
    scoreDiv.className='scroreDiv';
    const plus = document.createElement('p');
    plus.className='plus';
    plus.textContent='+';

    const score = document.createElement('p');
    score.className='score';
    score.textContent=data.comments[i].score
    const minus = document.createElement('p');
    minus.className='minus';
    score.textContent='-';

    bottomDiv.append(plus);
    bottomDiv.append(score);
    bottomDiv.append(minus);
    //publication div append children
    publicationDiv.append(topDiv);
    publicationDiv.append(comment);
    publicationDiv.append(bottomDiv);
    return publicationDiv;
  
  }


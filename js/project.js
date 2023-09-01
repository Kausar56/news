const handleCetrgory = async() =>{
    const tabContainer = document.getElementById('tab-Container');
  
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await res.json();

    const fullData = data.data.news_category;
  
    

    fullData.slice(0,5).forEach((category) => {
     const div = document.createElement('div');
     div.innerHTML = `
     
     <a onclick="handleLoadNews('${category.category_id}')" class="tab">${category.category_name}</a> 
    
     
     `

     tabContainer.appendChild(div);
    });


 

};

   // bind 2nd api with first api 

   const handleLoadNews = async(id) =>{
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";
       const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
       const data = await res.json();
       const fullData = data.data;
       console.log(fullData);

       fullData.forEach((news) => {
        const div = document.createElement('div');
       div.innerHTML = `
       
       <div class="card w-full bg-base-100 shadow-xl">
       <figure><img src=${news.image_url}></figure>
       <div class="card-body">
       <div class="flex justify-between">

       <h2 class="card-title">
       ${news.title.slice(0,40)}
       <div class="badge badge-secondary p-5">${news.rating.badge}</div>
     </h2>
       
       </div>
         <p>${news.details.slice(0,60)}</p>

         <h3>total view: ${news.total_view? news.total_view: "not view"}</h3>
         <div class="card-footer flex justify-between">
           <!-- <img> -->
           <div class="avatar online">
               <div class="w-14 rounded-full">
                   <img src=${news.author.img}>
               </div>
           </div>
           <div>
               <h2>${news.author?.name}</h2>
               <small>${news.author?.published_date}</small>
           </div>
           
           <div>
               <button class="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-slate-900 duration-500">Details</button>
           </div>
         </div>
       </div>
     </div>
       
       `

       cardContainer.appendChild(div)
       })
   };




handleCetrgory()

handleLoadNews("01")
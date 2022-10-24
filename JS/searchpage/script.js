const sideBar = document.getElementById('sideBar') ; 
	const toggleBtn = document.getElementById('toggleContainer');
 const mainVideos = document.getElementById('Menu') ;
 const listRandomVideos = document.getElementsByClassName('RecomendedVideos-list')[0];
	toggleBtn.onclick =  ()=> {
		if(sideBar.style.transform == 'translateX(0%)'){
			sideBar.style.transform = 'translateX(-150%)';
			mainVideos.style.width = 80 + '%' ; 
			mainVideos.style.left = 0 + '%' ;
		}else{
			sideBar.style.transform = 'translateX(0%)';
			mainVideos.style.width = 70 + '%';
			mainVideos.style.left = 15 + '%';
		
		}
	}

	const options2 = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '41fa46cb86msh227ef74d0864028p16dcdbjsn9250ccc239c6',
			'X-RapidAPI-Host': 'tiktok-all-in-one.p.rapidapi.com'
		}
	};
	const dashBored = document.getElementsByClassName('SearchForm')[0];
	 const dash = document.createElement('ul');
		dash.classList.add('dashBored')
		dashBored.appendChild(dash)
	
	const inputSearch = document.getElementById('search-bar')
	const searchBtn = document.querySelector('[data-Search-Btn]')
	const AutoComplete_api_url = 'https://youtube-v31.p.rapidapi.com/search?q='+inputSearch.value

let Elements = [] ; 




inputSearch.addEventListener('input' , (e)=>{
 let val = e.target.value ; 

 const options2 = {
  method: 'GET',
  headers: {
   'X-RapidAPI-Key': '41fa46cb86msh227ef74d0864028p16dcdbjsn9250ccc239c6',
   'X-RapidAPI-Host': 'tiktok-all-in-one.p.rapidapi.com'
  }
 };
  const getData = async()=>{
  const response = await fetch('https://tiktok-all-in-one.p.rapidapi.com/search/user?query='+e.target.value, options2);
  const data = await response.json();
 //	console.log(data) ; 
  
   dash.style.height = 300 + 'px'
  
  dash.innerHTML = data.user_list.map(Element =>{
   return `<li>
   <p>${Element.user_info.nickname}</p>
   </li> ` 
  }).join('')
  Elements = data.user_list.map(Element =>{
   return Element.user_info.nickname; 
  })
  document.body.addEventListener('mousedown' , ()=>{
   dash.style.height = 0 + 'px'
  })
  
}
getData();	
 Elements.forEach(element =>{
  let isVisible = element.includes(val)
  element.classList.toggle('is-hidden' , !isVisible);
  
 })

})

const DataBtn = document.querySelector('[data-Search-Btn]');
const SideBarAccounts = document.getElementById('middle');
const RandomVideos = document.getElementById('RandomVideos')

DataBtn.addEventListener('click' , ()=>{

 const options = {
  method: 'GET',
  headers: {
   'X-RapidAPI-Key': '8d6796a13fmsh5b6b09d9f9ca34ep1262acjsnbbd1102f05aa',
   'X-RapidAPI-Host': 'tiktok-all-in-one.p.rapidapi.com'
  }
 };
 
 fetch('https://tiktok-all-in-one.p.rapidapi.com/search/user?query='+inputSearch.value, options)
  .then(response => response.json())
  .then(response => {
   console.log(response) ;
   SideBarAccounts.innerHTML = response.user_list.map(element =>{
    return `
     <li style='display:flex ; align-items:center ; gap :15px'>
      <img src='${element.user_info.avatar_168x168.url_list[0]}' height='50px' width='auto'style="border-radius : 50%" >
      <h3>
        ${element.user_info.nickname}
      </h3>
     </li>
    ` 
   }).join('')
  })
  .catch(err => console.error(err));

  const options4 = {
   method: 'GET',
   headers: {
    'X-RapidAPI-Key': '8d6796a13fmsh5b6b09d9f9ca34ep1262acjsnbbd1102f05aa',
    'X-RapidAPI-Host': 'tiktok-all-in-one.p.rapidapi.com'
   }
  };
  
  const getDataVideo = async ()=>{
   const response = await fetch('https://tiktok-all-in-one.p.rapidapi.com/search/video?query='+inputSearch.value+'=20&sort=1&time=7', options4);
   const data = await response.json();
   console.log(data) ; 
   RandomVideos.innerHTML = data.aweme_list.map(element =>{
	  	return 	` 
		 <li class='element' >
     <a href='#' class='linker-video'>
     <div class='User-Video'>
		  <div class = 'Up-container-info'>
		  	<div class='Icon-User-video'>
		   	<img src = '${element.author.avatar_168x168.url_list[0]}' class='icon-of-user' alt='creator-video-icon' >
			   <h2 class='User-name-video'>${element.author.nickname}</h2>
		  	</div> 
			 </div>
			<div class='video-component-searched'>
			<div class="right-video-display-searched"> 
			<video src = '${element.video.download_addr.url_list[0]}'
			type="video/mp4"
    controls
	  	loop 
	  	disablepictureinpicture 
	 	 controlslist="nodownload noplaybackrate">     
			</video>
			</div>		
   </div>
   </div>
     
     </a>			
			</li>		
		` 
	}).join('');
  } 
  getDataVideo();
})


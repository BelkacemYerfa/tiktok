//JS code

	const sideBar = document.getElementById('sideBar') ; 
	const toggleBtn = document.getElementById('toggleContainer');
 const mainVideos = document.getElementById('Menu') ;
 const listRandomVideos = document.getElementsByClassName('RecomendedVideos-list')[0];
	toggleBtn.onclick =  ()=> {
		if(sideBar.style.transform == 'translateX(0%)'){
			sideBar.style.transform = 'translateX(-150%)';
			mainVideos.style.width = 100 + '%' ; 
			mainVideos.style.left = 0 + '%' ;
		}else{
			sideBar.style.transform = 'translateX(0%)';
			mainVideos.style.width = 75 + '%';
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

const searchElements = [
	'peter' , 'elon' , 'JavaScriptMastery' , 'Rock' , 'national'
]

let UserRegion ; 

//uses the api ip address gives you the access to the user address

const AccountsSuggestion = document.getElementsByClassName('AcountsSuggetion')[0];


fetch("http://ip-api.com/json")
.then(response => response.json())
.then(data =>{
	const options1 = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '8d6796a13fmsh5b6b09d9f9ca34ep1262acjsnbbd1102f05aa',
			'X-RapidAPI-Host': 'tiktok-all-in-one.p.rapidapi.com'
		}
	};
let i = 0 ; 

fetch('https://tiktok-all-in-one.p.rapidapi.com/user/recommend?=US', options1)
	.then(response => response.json())
	.then(response => {
		console.log(response) ; 
  AccountsSuggestion.innerHTML = response.user_list.map(element =>{
   i += 1;
			if(i < 5){
				return ` 
			 <li class = 'User-account' style = 'display:flex ; align-items:center ; gap : 10px;'>
				 <img src = '${element.user.avatar_168x168.url_list[0]}' class='User-account-avatar' style="height : 50px; width:auto ; border-radius : 50% ; " >
					<h3 class = 'User-account-name'>
				  ${element.user.nickname}
					</h3>
				</li>
			` 
			}
		}).join('') ; 

	})
	.catch(err => console.error(err));
});



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
			
			if(	mainVideos.style.zIndex != -1){
				mainVideos.style.zIndex = -1
			}
			else{
				mainVideos.style.zIndex = 1
			}
		})
	
})


const RandomVideos = document.getElementById('RandomVideos')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '41fa46cb86msh227ef74d0864028p16dcdbjsn9250ccc239c6',
		'X-RapidAPI-Host': 'tiktok-all-in-one.p.rapidapi.com'
	}
};

setInterval(()=>{
	fetch('https://tiktok-all-in-one.p.rapidapi.com/feed?region=US&device_id=7523368224928586621', options)
	.then(response => response.json())
	.then(response => {
		console.log(response);
	 RandomVideos.innerHTML += response.aweme_list.map(element =>{
	  	return 	` 
		 <li class='container-element'>
			<div class='User'>
			
			<div class = 'left-container'>
			<div class='Icon-User'>
			<img src = '${element.author.avatar_168x168.url_list[0]}' class='icon-of-user' alt='creator-video-icon' >
			<h2 class='User-name'>${element.author.nickname}</h2>
			</div>
			<div class='Info-User'>
			<p class='video-Description'>${element.desc.slice(0,50)}</p>
			<div class='music-container'>
			 <i class="fa-solid fa-music" id='music-icon'></i>
				<strong> &nbsp; ${element.music.title} </strong>
			</div>
			</div><div class="left-video-info"> 
			 
   <ul class='related-components'>
				 <li class='element-sharing' >
					<svg class="svg-cc offline" id='changer' width="64" height="63" viewBox="0 0 64 63" xmlns="http://www.w3.org/2000/svg">
					<path d="M32.0955 27.0564L32.0955 22.3064" stroke="#C33E4F" stroke-width="3" stroke-linecap="round"/>
					<path d="M38.626 31.5L43.376 31.5" stroke="#C33E4F" stroke-width="3" stroke-linecap="round"/>
					<path d="M38.4866 26.3607L41.8453 23.002" stroke="#C33E4F" stroke-width="3" stroke-linecap="round"/>
					<path d="M35.1279 35.9437L38.4867 39.3025" stroke="#C33E4F" stroke-width="3" stroke-linecap="round"/>
					<path d="M32.0955 44.0524L32.0955 39.3024" stroke="#C33E4F" stroke-width="3" stroke-linecap="round"/>
					<path d="M20.791 31.5001L25.541 31.5001" stroke="#C33E4F" stroke-width="3" stroke-linecap="round"/>
					<path d="M23.8616 39.3025L27.2203 35.9437" stroke="#C33E4F" stroke-width="3" stroke-linecap="round"/>
					<path d="M23.8616 23.6975L27.2203 27.0563" stroke="#C33E4F" stroke-width="3" stroke-linecap="round"/>
					<path d="M30.4065 47.1384C31.4173 47.86 32.7736 47.86 33.7844 47.1384C38.836 43.5322 43.6735 39.3834 47.0199 34.0742C48.6964 31.4144 49.3991 29.2633 49.6755 27.5044C49.7871 26.8851 49.8455 26.2462 49.8455 25.593C49.8455 19.9196 45.4424 15.3204 40.011 15.3204C36.7651 15.3204 33.8865 16.963 32.0955 19.4957C30.3044 16.963 27.4258 15.3204 24.1799 15.3204C18.7485 15.3204 14.3455 19.9196 14.3455 25.593C14.3455 26.2462 14.4038 26.8851 14.5154 27.5044C14.7918 29.2633 15.4945 31.4144 17.171 34.0742C20.5174 39.3834 25.3549 43.5322 30.4065 47.1384Z" fill="white"/>
					</svg>
					<p class="data-related-info">
					 ${element.statistics.collect_count}
					</p>
					</li>
					<li class='element-sharing'>
					<i class="fas fa-comment-dots fa-lg" aria-hidden="true"></i>
					<p class="data-related-info">
					${element.statistics.comment_count}
					</p>
					</li>
					<li class='element-sharing'>
					<i class="fas fa-share fa-lg" aria-hidden="true"></i>
					<p class="data-related-info">
					${element.statistics.share_count}
					</p>
					</li>
				</ul>
			</div>
			</div>
			<div class='video-component'>
			<div class="right-video-display"> 
			<video src = '${element.video.download_addr.url_list[0]}'
			type="video/mp4"
    controls
	  	loop 
	  	disablepictureinpicture 
	 	 controlslist="nodownload noplaybackrate">     
			</video>
			</div>		
   </div>
			</li>
			<hr />
		` 
	}).join('');
	})
	.catch(err => console.error(err));
} , 30000)


setTimeout(() => {
	let indexChanger = 0 ; 
	const svgChanger = document.getElementsByClassName('svg-cc');
  //this return an array you can etirate for it 
 for(let j= 0 ; j< svgChanger.length ; j++){
		svgChanger[j].addEventListener('click' , ()=>{
			indexChanger += 1 ;
			if(indexChanger % 2 !== 0){
				svgChanger[j].style.backgroundColor = '#fe2c55';
			}
			else{
				svgChanger[j].style.backgroundColor = 'rgba( 255, 255, 255, 0.15 )'
			}
			console.log(svgChanger[j].style.backgroundColor)
		})
	}
}, 40000);


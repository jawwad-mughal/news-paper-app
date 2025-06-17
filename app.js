// nav slider function
// let navbar = () =>{
//     let nav = document.getElementById("nav");
//      setTimeout(() => {
//         nav.classList.add("navbar1");
//     }, 0);         
//     window.addEventListener("scroll", () => {
//         if(window.scrollY > 80){
//             nav.classList.remove("navbar1")
//         }if(window.scrollY === 0){
//             nav.classList.add("navbar1")
//         }  
                 
//     });  
// }
// navbar()

// // nav inside logo animation effect function
// let logo = () => {
//     let logo = document.getElementById("logo");
//     setTimeout(() =>{
//         logo.classList.add("logo1") 
//     },1700)
//     window.addEventListener("scroll", () => {
//         if(window.scrollY > 80){
//             logo.classList.remove("logo1")
//         }if(window.scrollY === 0){
//             setTimeout(() =>{
//                 logo.classList.add("logo1") 
//             },1300)
//         }               
//     }); 
// }
// logo()  

// // nav inside search animation effect function
// let search = () => {
//     let search = document.getElementById("search");
//     let searchbtn = document.getElementById("searchbtn");
//     setTimeout(() =>{
//         search.classList.add("search1") 
//     },1780)
//     window.addEventListener("scroll", () => {
//         if(window.scrollY > 80){
//             search.classList.remove("search1")
//         }if(window.scrollY === 0){
//             setTimeout(() =>{
//                 search.classList.add("search1") 
//             },1380)
//         }             
//     });
    
// }
// search() 

// // nav inside searchbtn animation effect function
// let searchbtn = () => {
//     let searchbtn = document.getElementById("searchbtn");
//     setTimeout(() =>{
//         searchbtn.classList.add("searchbtn1") 
//     },1800)
//     window.addEventListener("scroll", () => {
//         if(window.scrollY > 80){
//             searchbtn.classList.remove("searchbtn1")
//         }if(window.scrollY === 0){
//             setTimeout(() =>{
//                 searchbtn.classList.add("searchbtn1") 
//             },1420)
//         }             
//     }); 
// }
// searchbtn()

// // history section inside content animation effect function

// let num = 0.7
// document.getElementById("searchbtn")
// .addEventListener('click', () => {
//     let showdata = document.getElementById("showdata")
//     showdata.classList.remove("showdata1")
    
        
//         let search = document.getElementById("search");
//         let history_container = document.querySelector('#history_container');
//         let userInput = search.value.trim();
//         if(userInput !== ""){
//             // Create the new history_div element
//             let newHistoryDiv = document.createElement('div');
//             newHistoryDiv.className = 'history_div '; 
//             newHistoryDiv.style = `transition-delay: ${num}s;`
            
            
//             newHistoryDiv.innerHTML = `
//             <p>${userInput}</p>
//             <p onclick='remove(this)'><i style="font-size: 16px;" class="fa-solid fa-xmark"></i></p>
//             `;
//             num += 0.1
//             setTimeout(() => {
//                 newHistoryDiv.classList.add( 'history_div1');
//             });
//             history_container.appendChild(newHistoryDiv)
//             window.addEventListener("scroll", () => {
//                 if(scrollY < 200 ){
//                     newHistoryDiv.classList.remove("history_div1")
//                 }
//                 if(window.scrollY == 0){
//                     setTimeout(() =>{
//                         newHistoryDiv.classList.add("history_div1")
//                     },2500)
//                 }               
//             });
//             search.value = "";
            
            
//             let icon = document.getElementById("icon");
//             icon.classList.add("icon1");
//             setTimeout(() => {

//                 icon.classList.remove("icon1");
//             },3000)

//             let loader = document.getElementById("loader");
//             setTimeout(() => {
                
//                 loader.classList.add("loader1");
//             },1000)
//             setTimeout(() => {

//                 loader.classList.remove("loader1");
//                 loader.classList.remove("loader");
//             },3000)

//     function getCurrentDatePKT() {
//     const now = new Date();
    
//     const pktOffset = 5 * 60; 
//     const utc = now.getTime() + (now.getTimezoneOffset() * 60000); 
//     const pktTime = new Date(utc + (pktOffset * 60000)); 

    
//     const options = {
        
//         day: 'numeric' 
//     };
    
    
//     const formatter = new Intl.DateTimeFormat('en-US', options);
//     return formatter.format(pktTime);
// }
// let date = getCurrentDatePKT()
// console.log(date)

//             // data fetch
//             setTimeout(() => {
//                 let getNews = async (input) => {
//             try{
//                 let apiUrl = `https://newsapi.org/v2/everything?q=${input}le&from=2025-06-${date}&sortBy=popularity&apiKey=864ef4174574452ab0474585254aaa70`;
//                 let response = await fetch(apiUrl);
//                 let data = await response.json();
            
//                 // Clear previous results
//                 const showDataDiv = document.getElementById('showdata');
//                 showDataDiv.innerHTML = '';
            
                
//                 data.articles.forEach(article => {
                
//                 const card = document.createElement('div');
//                 card.className = 'card';
            
               
//                 card.style.width = '300px'; 
//                 card.style.height = '400px'; 
//                 card.style.border = '1px solid #ccc';
//                 card.style.borderRadius = '8px';
//                 card.style.overflow = 'hidden';
//                 card.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
//                 card.style.display = 'flex';
//                 card.style.flexDirection = 'column';
//                 card.style.background = 'linear-gradient(135deg, #f8f7c3, #ace0e7)';
            
                
//                 const img = document.createElement('img');
//                 img.src = article.urlToImage ; 
//                 img.alt = 'News Image';
//                 img.style.width = '100%'; 
//                 img.style.height = '150px'; 
//                 img.style.objectFit = 'cover';
            
//                 const contentDiv = document.createElement('div');
//                 contentDiv.style.padding = '10px';
//                 contentDiv.innerHTML = `
//                     <h3 style="margin: 0 0 10px;">${article.title}</h3>
//                     <p style="font-size: 0.9em; color: #555;">${article.description}</p>
//                     <a href="${article.url}" target="_blank" style="color: #007BFF; text-decoration: none;">Read more</a>
//                 `;
            
//                 card.appendChild(img);
//                 card.appendChild(contentDiv);
            
                
//                 document.getElementById('showdata').appendChild(card);
//                 let showdata = () => {
//             let showdata = document.getElementById("showdata");
//              setTimeout(() => {
//                 showdata.classList.add("showdata1");
//             } );         
              
//         }
//         showdata()
//             })
//             }catch(error){
//                 console.log(error)
//             }
//         };
        
//         // Call the renamed function
//         getNews(userInput);
//             },3000)
// }
// });
    
//     function remove(element) {
//       element.parentNode.remove();
//     }

// //  history section animation effect function
// let history = () => {
//     let history = document.getElementById("history");
//      setTimeout(() => {
//         history.classList.add("history1");
//     } );         
//     window.addEventListener("scroll", () => {
//         if(scrollY < 200 ){
//             history.classList.remove("history1")
//         }
//         if(window.scrollY == 0){     
//                 history.classList.add("history1")
//         }               
//     });  
// }
// history()

// //  history_para_div section animation effect function
// let history_para_div = () => {
//     let historypara = document.getElementById("history_para");
//      setTimeout(() => {
//         historypara.classList.add("history_para1");
//     } );         
//     window.addEventListener("scroll", () => {
//         if(scrollY < 200 ){
//             historypara.classList.remove("history_para1")
//         }
//         if(window.scrollY == 0){
//             setTimeout(() =>{
//                 historypara.classList.add("history_para1")
//             })
//         }             
//     });  
// }
// history_para_div()


let navbar = () => {
    let nav = document.getElementById("nav");
    setTimeout(() => {
        nav.classList.add("navbar1");
    }, 0);
    window.addEventListener("scroll", () => {
        if (window.scrollY > 80) {
            nav.classList.remove("navbar1");
        } else if (window.scrollY === 0) {
            nav.classList.add("navbar1");
        }
    });
};
navbar();

// Logo animation
let logo = () => {
    let logo = document.getElementById("logo");
    setTimeout(() => {
        logo.classList.add("logo1");
    }, 1700);
    window.addEventListener("scroll", () => {
        if (window.scrollY > 80) {
            logo.classList.remove("logo1");
        } else if (window.scrollY === 0) {
            setTimeout(() => {
                logo.classList.add("logo1");
            }, 1300);
        }
    });
};
logo();

// Search animation
let search = () => {
    let search = document.getElementById("search");
    setTimeout(() => {
        search.classList.add("search1");
    }, 1780);
    window.addEventListener("scroll", () => {
        if (window.scrollY > 80) {
            search.classList.remove("search1");
        } else if (window.scrollY === 0) {
            setTimeout(() => {
                search.classList.add("search1");
            }, 1380);
        }
    });
};
search();

// Search button animation
let searchbtn = () => {
    let searchbtn = document.getElementById("searchbtn");
    setTimeout(() => {
        searchbtn.classList.add("searchbtn1");
    }, 1800);
    window.addEventListener("scroll", () => {
        if (window.scrollY > 80) {
            searchbtn.classList.remove("searchbtn1");
        } else if (window.scrollY === 0) {
            setTimeout(() => {
                searchbtn.classList.add("searchbtn1");
            }, 1420);
        }
    });
};
searchbtn();

// Current Date Function (returns YYYY-MM-DD for NewsAPI)
function getCurrentDatePKT() {
    const now = new Date();
    const pktOffset = 5 * 60; // PKT is UTC+5
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const pktTime = new Date(utc + (pktOffset * 60000));
    const year = pktTime.getFullYear();
    const month = String(pktTime.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(pktTime.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`; // e.g., "2025-06-17"
}

// Optional: Display formatted date in UI
function getDisplayDatePKT() {
    const now = new Date();
    const pktOffset = 5 * 60;
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const pktTime = new Date(utc + (pktOffset * 60000));
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return new Intl.DateTimeFormat('en-US', options).format(pktTime); // e.g., "Tuesday, June 17, 2025"
}

// Update date in UI
function updateDate() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        dateElement.textContent = getDisplayDatePKT();
    }
}
updateDate();

// Search button click handler
let num = 0.7;
document.getElementById("searchbtn").addEventListener('click', () => {
    let showdata = document.getElementById("showdata");
    showdata.classList.remove("showdata1");

    let search = document.getElementById("search");
    let history_container = document.querySelector('#history_container');
    let userInput = search.value.trim();
    if (userInput !== "") {
        // History div
        let newHistoryDiv = document.createElement('div');
        newHistoryDiv.className = 'history_div';
        newHistoryDiv.style = `transition-delay: ${num}s;`;
        newHistoryDiv.innerHTML = `
            <p>${userInput}</p>
            <p onclick='remove(this)'><i style="font-size: 16px;" class="fa-solid fa-xmark"></i></p>
        `;
        num += 0.1;
        setTimeout(() => {
            newHistoryDiv.classList.add('history_div1');
        });
        history_container.appendChild(newHistoryDiv);
        window.addEventListener("scroll", () => {
            if (window.scrollY < 200) {
                newHistoryDiv.classList.remove("history_div1");
            }
            if (window.scrollY === 0) {
                setTimeout(() => {
                    newHistoryDiv.classList.add("history_div1");
                }, 2500);
            }
        });
        search.value = "";

        // Icon animation
        let icon = document.getElementById("icon");
        icon.classList.add("icon1");
        setTimeout(() => {
            icon.classList.remove("icon1");
        }, 3000);

        // Loader animation
        let loader = document.getElementById("loader");
        loader.classList.add("loader");
        setTimeout(() => {
            loader.classList.add("loader1");
        }, 1000);

        // Fetch news
        getNews(userInput).finally(() => {
            loader.classList.remove("loader1");
            loader.classList.remove("loader");
        });
    }
});

// News fetch function
let getNews = async (input) => {
    try {
        // Use CORS proxy for testing
        let api *@apiUrl = `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=${input}&from=${getCurrentDatePKT()}&sortBy=popularity&apiKey=864ef4174574452ab0474585254aaa70`;
        let response = await fetch(apiUrl, {
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'NewsApp/1.0'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();

        if (!data.articles || !Array.isArray(data.articles)) {
            console.error('No articles found in response:', data);
            document.getElementById('showdata').innerHTML = '<p>No news articles found. Please try again.</p>';
            return;
        }

        const showDataDiv = document.getElementById('showdata');
        showDataDiv.innerHTML = '';

        data.articles.forEach(article => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.width = '300px';
            card.style.height = '400px';
            card.style.border = '1px solid #ccc';
            card.style.borderRadius = '8px';
            card.style.overflow = 'hidden';
            card.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
            card.style.display = 'flex';
            card.style.flexDirection = 'column';
            card.style.background = 'linear-gradient(135deg, #f8f7c3, #ace0e7)';

            const img = document.createElement('img');
            img.src = article.urlToImage || 'https://via.placeholder.com/150';
            img.alt = 'News Image';
            img.style.width = '100%';
            img.style.height = '150px';
            img.style.objectFit = 'cover';

            const contentDiv = document.createElement('div');
            contentDiv.style.padding = '10px';
            contentDiv.innerHTML = `
                <h3 style="margin: 0 0 10px;">${article.title || 'No title available'}</h3>
                <p style="font-size: 0.9em; color: #555;">${article.description || 'No description available'}</p>
                <a href="${article.url || '#'}" target="_blank" style="color: #007BFF; text-decoration: none;">Read more</a>
            `;

            card.appendChild(img);
            card.appendChild(contentDiv);
            showDataDiv.appendChild(card);

            let showdata = () => {
                let showdata = document.getElementById("showdata");
                setTimeout(() => {
                    showdata.classList.add("showdata1");
                }, 100);
            };
            showdata();
        });
    } catch (error) {
        console.error('Error fetching news:', error);
        document.getElementById('showdata').innerHTML = `<p>Error fetching news: ${error.message}</p>`;
    }
};

// Remove history item
function remove(element) {
    element.parentNode.remove();
}

// History section animation
let history = () => {
    let history = document.getElementById("history");
    setTimeout(() => {
        history.classList.add("history1");
    });
    window.addEventListener("scroll", () => {
        if (window.scrollY < 200) {
            history.classList.remove("history1");
        }
        if (window.scrollY === 0) {
            history.classList.add("history1");
        }
    });
};
history();

// History paragraph animation
let history_para_div = () => {
    let historypara = document.getElementById("history_para");
    setTimeout(() => {
    historypara.classList.add("history_para1");
    });
    window.addEventListener("scroll", () => {
        if (window.scrollY < 200) {
            historypara.classList.remove("history_para1");
        }
        if (window.scrollY === 0) {
            setTimeout(() => {
                historypara.classList.add("history_para1");
            });
        }
    });
};
history_para_div();



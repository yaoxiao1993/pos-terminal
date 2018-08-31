window.onload = function(){
    //为了js代码发执行不阻塞页面DOM的渲染，我们使用这个方法页让页面加载完成之后执行内部代码！
    const homePage={
        init(){
            axios.defaults.baseURL = 'http://localhost:3001';
            homePage.fun.render();
            document.addEventListener('click',homePage.fun.handleDeleteMovieClick,false);
        },

        fun:{
            render(){
                axios.get('http://localhost:3001/items')
                .then(function(response){
                    let itemsList = response.data;
                //     itemsList.forEach(movie => {
                //         let star = "★★★★★☆☆☆☆☆";
                //         let rate = Math.round(movie.score/2);
                //         str += `
                //         <li class="movieBox">
                //             <i class="delMovie" data-movieId="${movie.id}">X</i>
                //             <div class="mPost">               
                //                 <img src="${movie.post}" alt="${movie.title}">
                //             </div>
                //             <div class="mTitle">${movie.title}</div>
                //             <div class="mScore">${star.slice(5-rate, 10-rate)+movie.score} 分</div>
                //         </li>`
                //     });
                // let moviesRow = document.getElementById("moviesRow")
                // moviesRow.innerHTML += str;
                
                })
        
                .catch(function(error){
                    console.log(error);
                });
            },
            handleDeleteMovieClick(e){
                let movieId = e.target.getAttribute("data-movieId");
                if(movieId){
                    let confirmDel = confirm("确定删除？");
                    if(confirmDel)
                        homePage.fun.deleteMovieById(movieId)
                    else return
                }else return
            },
            deleteMovieById(movieId){
                axios.delete(`http://localhost:3000/movies/${movieId}`)
                .then(function(response){
                    if(response.status===200){
                        console.log("删除成功！")
                        window.location.reload();
                        render();
                    }
                })
                .catch(function(error){
                    console.log(error);
                });
            }
        }
    }
    homePage.init();
}
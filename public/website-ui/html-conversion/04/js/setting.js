function load_more_portfolio(){
    document.querySelector(".more_works_portfolio").classList.toggle("more_works_portfolio_active")
}

document.querySelector("#category_portfolio_all").addEventListener("click", function(){
    document.querySelector(".works_portfolio_web_design").classList.remove("category_actived_projects")
    document.querySelector(".works_portfolio_app").classList.rmove("category_actived_projects")
    document.querySelector(".works_portfolio_brand").classList.rmove("category_actived_projects")
    document.querySelector(".works_portfolio_all").classList.remove("works_portfolio_all_desabled")
    
})
document.querySelector("#category_portfolio_web_design").addEventListener("click", function(){
    alert("fdf")
    document.querySelector(".works_portfolio_web_design").classList.add("category_actived_projects")
    document.querySelector(".works_portfolio_app").classList.remove("category_actived_projects")
    document.querySelector(".works_portfolio_brand").classList.rmove("category_actived_projects")
    document.querySelector(".works_portfolio_all").classList.add("works_portfolio_all_desabled")
})
document.querySelector("#category_portfolio_app").addEventListener("click", function(){
    document.querySelector(".works_portfolio_web_design").classList.remove("category_actived_projects")
    document.querySelector(".works_portfolio_app").classList.add("category_actived_projects")
    document.querySelector(".works_portfolio_brand").classList.remove("category_actived_projects")
    document.querySelector(".works_portfolio_all").classList.add("works_portfolio_all_desabled")
})
document.querySelector("#category_portfolio_branding").addEventListener("click", function(){
    alert("active")
    document.querySelector(".works_portfolio_brand").classList.add("category_actived_projects")
    document.querySelector(".works_portfolio_web_design").classList.remove("category_actived_projects")
    document.querySelector(".works_portfolio_app").classList.remove("category_actived_projects")
    document.querySelector(".works_portfolio_all").classList.add("works_portfolio_all_desabled")
})
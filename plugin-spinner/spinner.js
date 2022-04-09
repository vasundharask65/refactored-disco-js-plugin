//1. Self invoking function - anonymous function, gets invoked automatically, variable scoping
//2. Prototype - add new properties to existing object
//3. This - refers to object
//4. DOM manipulation by getElementById()
(function(){
     Element.prototype.spinner = function (contentId) {
        var contentId = document.getElementById(contentId);
        var objLocal = this;             
        var htmlContent = `      
          <div class="ispinner ispinner-large">
            <div class="ispinner-blade"></div>
            <div class="ispinner-blade"></div>
            <div class="ispinner-blade"></div>
            <div class="ispinner-blade"></div>
            <div class="ispinner-blade"></div>
            <div class="ispinner-blade"></div>
            <div class="ispinner-blade"></div>
            <div class="ispinner-blade"></div>
          </div>
        `;
        contentId.innerHTML = htmlContent;
        contentId.style.display = "none";
        document.getElementById(`${objLocal.id}`).addEventListener("click", function () {
          contentId.style.display = contentId.style.display == "none" ? "block" : "none";
        });
      }     
})();

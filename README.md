# SpecialYouProject

## Problems

### 22/02/2023

`1` Why Mui button isn't taking the complete height of the container when it is given 100% \
`2` there is a problem using arrow icon in product add ons section ? \
`3` why the grid is getting out of the container ? \
`4` images at color options are weirdly behaving when given percentage ! \  
`5` while using image with img tag ,image not passed don't disappear completely while with background property it is done ? \
`6` mui button is also creating problem in the bottom part of pdp page \
`7` design is undesirably expanding at more resolution ? \

### 25/02/2023

`1` can we provide position relative as well as absolute to same container ? \
`2` does className also works in .css file ? as it worked in MyCart.js ? \
`3` why flex wrap in wishlist.js is providing the gap on vertical which is unnecessary ? \
`4`

### 28/02/2023

`1` height,width percentage mein kyon nhi lag rahi hai in button(also after giving height and width 100% to its container) ? \
`2` also font-size and letter spacing properties are not applied to the button when I apply it to its container ? \
`3` Is there any way by which we can by default set some height and width but also pass it via props(like in loginForm we use HeaderPart) \
`4` there is some place where i have given h2 some property in css file, I have to find out. \

### 1/03/2023

`1`/_ font-weight: 500; _/ /_ why this property is of no use in parent container_/ \
`2` /_ font-weight: 700; _/ /_ why font-weight is now working in parent container_/ \

### 2/03/2023

`1`/_ color: rgba(92, 92, 92, 0.2); this changes the color of text as well as keyboard cursor_/
/_ how to change the color of placeholder text ? _/ in homepage2.js\

### 3/03/2023

`1` /_ without giving width equals to 100% button doesn't expands upto 100% . Why ? in decorationsForButton2 in homepage2.module.css_/

### 10/03/2023

`1` // zIndex: "10", don't know why this is not working in ListItem.js /
`2` LoggedinPopup is coming in center (like inside centerWrapper) when not given ? /
`3` box problem , height, width passed not working. /
`4` complex to think how we make work orderHistory and myorders /

### 15/03/2023

`1` styled components are creating havoc in the site ? /
`2` if data of array has 9 objects present inside and I want to render only 8 objects then how we can do that, (so that json file can be more reusable) /
`3` logic is working in routing wishlist but not in right drawer wishlist( bcoz of obvious reasons) /
`4` Error : for adding items in wishlist ,homepage is working correctly as it is in productCard1 but plp and pdp is in productCard2 so we are not able to use both at the same time when tried it throws error ? /
`5` We must split the checkout and checkout2 page in two different components or pages ,whatever we say ! /
`6` slider is still unresolved /

### 16/03/2023

`1` key must be given on div not on productCard2 in pdp, right ? /

### 17/03/2023

`1` In our products section of homepage when we apply property background-size :100% 100% in css file , it is not applied ,when we inspect while other properties like border-radius are applied. (also we can see it in themes grid section)/
`2` Is there any way so that we can apply style in css file and not giving it as inline style while fetching data from json. /
`3` also in specialyou practice project all reference files are present while it is not pushing to the remote repo and showing errors. ( maybe saying one commit ahead ) /
`4` decoration for kids has different background color for each image how we can set it without giving different color in json file ? /
`5` It might be possible that we can't wrap grid item with link ,styles are totally changed then . /
`6` may be that might be the case of `5` because decorationsForImage is a grid item and we are wrapping that only. /
`7` may be event propagation is happening when we click on wishlist icon present on image ! /
`8` http://localhost:3000/decorationsForKids/2/plp/1 this type of problem is coming. /
`9` why pdp is not opening after giving nested routing also. /

### 21/03/2023

`1` on giving min-width : 300rem , why wishlist text is disappearing without any error ? /
`2`why dots ,below the paper, in carousel are disappearing after a certain width ? /

### 22/03/2023

`1` why comments are not working in styled components productCard2 ,main image // background: url(${image}); /

### 23/03/2023

`1` what problems we have in browse themes, same problem we have in wishlist align-items stretch /

### 24/03/2023

`1` label tag is not working

### 28/03/2023

`1` after going to plp and pdp , route becomes /pdp after that pdp/loginFormMobile which will not work ? /
`2` image inside myOrder shrinks when we give height in 100vh and when we give height:17.5% then only fits in homepage as it has more height, now solution we can dynamically pass height to sidebarWrapper or hardcode image height and width and give it overflow scroll which we have to give otherwise also and media query on text /

### 29/03/2023

`1` after clicking filter and sorting ,it will route to plpFilterMobile and on clicking Apply filters it will route back to plp page which we do by navigate(-1) which might be technically incorrect /
`2`

### 31/03/2023

`1` why 60% is applied on FooterPartButton when we applied it only on FooterPartIconButton ?

### 3/04/2023

`1` in pdp, on clicking sub image it must be bordered in red. Problem in logic ! /
`2` styled components problem is not resolved (arrow function right syntax) /
`3` redux and use effect(solved) /

### 4/04/2023

`1` problem using combined reducers /
`2` on clicking close button of wishlist, wishlist closes but we have given a command to close cart in HeaderPart on close button ,also then it should also close
MyOrders (which opens on clicking specialyou logo) /
`3` also problem in routing when using onNavigate in bestSeller, problem is relevant to function(solved) /
`4` how we passed two functions when we made wishList /

### 5/04/2023

`1` way to reset scroll bar up again when it goes down /
`2` if these both are equivalent ?
handleRoute={() =>
goToUrl(`decorationBackdrops/${decorationBackdrop.id}`)
}
handleRoute={() => {
goToUrl(`decorationBackdrops/${decorationBackdrop.id}`);
}} /
`3` routing in plp is sometimes working and sometimes not ? /
`4` on Clicking heartIcon it route which should not be done , also ,it worked only for productCard and not for productcard 2. /
`5` export const rightDrawerReducer;not correct,why ?
export rightDrawerReducer; not correct,why ? /
`6` what is the concept of local storage and how it will be used in our Project ? /
`7` doubt in transforming : if else ---> switch case . in reducers file /

### 6/04/2023

`1` in popup reducer, two actions are there closeAll(showlogin:true) and openLogin and if we shuffle these actions below and above each other. closeAll always takes priority, why ? /
`2` why loginForm is not working when we are trying to access it fron page loginpopup(this page is only used to dispatch action) . what is the execution then it must rerendering may be navbar or homepage or loginpopup or both ? /

### 7/04/2023

`1` logOut button of LoggedIn Popup isn't working. Why ? /
`2` on clicking user --> comes loginPopup but after submitting the form what comes should be loggedinPopup(not directly or maybe we can do it !). but How ? /
`3` why animation is running again and again ? /
`4` in CategoryList.js when we give give onClick event on container , it doesn't work.why ?
`5` Age list ko agar list item ke andar diya to saare list item pe work kar raha aur agar ek level up dekar paas kiya to work nhi kar raha ????
ye problem to sab components ke saath rahegi ? //
`5` action dispatch hote hi uska useSelector jahan hoga wahee js ki file chalegi only ? right !

### 13/04/2023

`1` can we put bottom sticky below right drawer (by providing low z index) bcoz thats not happening ! /
`2` problem with overlay (different behavior in homepage and plp and pdp) (solved) /
`3` how second point worked when we give navBarplus container position relative . /
`4` position sticky problem appears again on pdp page (clash with overlay) /
`5` ye plp pe targetBody console kyon nhi ho rahi hai, and what about optional chaining /

### 14/04/2023

`1` position sticky is not working in class left-part pf plp.module.css. /
`2` problem in checkout page and pdp page it increment one click increments all /

### 15/04/2023(task to be completed)

`1` complete form validation /
`2` api fetching /
`3` plp payload pass to achieve filtering and sorting /
`4` mobile flow error free /
`5` styled components still unresolved /
`6` pdp page se id ki help se kaise add to cart karenge /

### 15/04/2023(problems on the way)

`1` click add To and click go to in pdp /
`2` why function isn't returning true in Footer part icon button /
`3`

### 17/04/2023

`1` key kahan par de in similar products ,Productcard2 par ya phir div par /
`2` similar products ki image render nahi ho rahi /
`3`

### 18/04/2023

`1` homepage par jaate hi local storage is getting empty but that should only happen when we reload it , but we are not reloading then why this is getting empty ,if ans is function is executing again then that was also happening when state of wishlist was changing at homepage itself. ? /
`2`

### 19/04/2023

`1` in mobile, form is not going to checkout, why ?
`2` problem in plpfiltermobile.

### old problems

`7` inside shared assets > icons we use index.js , should we use it by other anme like icon.js or Icon.js? /
`8` warning: in the working copy of 'README.md', LF will be replaced by CRLF the next time Git touches it ? /

**some points are below-**
`1` name of all folders and css(module.css) files are in small letters
`2` name of javaScript files are in camel case

**below are links of required things**
[SpecialYou FigmaLink:](https://www.figma.com/file/znEHH3NvwBpT2WUZl0G7MF/Special-you---Website?node-id=265%3A5947&t=X7lze7qxHbP7TQjb-1) \
[SpecialYou GithubLink(private repo):](https://github.com/SpecialYouReact/SpecialYouProject) \
[SpecialYou GithubLink(public repo):](https://github.com/SpecialYouReact/specialYouPracticeProject) \

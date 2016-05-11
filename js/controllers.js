app.controller("MainController", function($scope){
  $scope.line="Angular works"
})

//-----------------Movie Search Section--------------------------------------------------------
app.controller("NavController", function($scope, $http, $rootScope){
  $scope.line="It works"
  $scope.getMovie=function(search){
    console.log(search);
    $http.get('http://www.omdbapi.com/?s='+search).then(function(data){
      $scope.movies = data.data.Search;
      console.log($scope);
    });
  }
  $scope.getMovieDetails=function(id){
    $http.get('http://www.omdbapi.com/?i='+id).then(function(movieData){
      $rootScope.number=50;
      $rootScope.details = movieData.data;
      console.log($scope.details);
    });
  }
})

//-----------------Reddit Section--------------------------------------------------------
app.controller("RedditController", function($scope){
  $scope.number = 99;
  $scope.showPost=false;
  $scope.sort = "votes"
  $scope.logit = function(){
    console.log($scope.form)
  }
  $scope.info = [
    {
      title: "Monkey costumes are totally in this season",
      author: "Linus Lane",
      image: "https://scontent-lga3-1.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/11809944_1676694042554573_495250395_n.jpg",
      description: "Hey, hey, we're the Monkees, and people say we monkey around. But we're too busy singing to put anybody down. We're just tryin' to be friendly, come and watch us sing and play. We're the young gneration, and we've got something to say.",
      date: '04/08/2015',
      votes: 10,
      comments: [
        {
          author: "Matt",
          text: "Cool costume."
        }
      ],
      commentStat: false,
      newCommentVisible: false
    }, {
      title: "2016 Baseball",
      author: "Andrew Baggarly",
      image: "https://upload.wikimedia.org/wikipedia/en/1/1e/Baseball_(crop).jpg",
      description: "The Giants win it all in even years. Next year is an even year. Therefore, the Giants will win it all next year.",
      date: '01/01/2016',
      votes: 2,
      comments: [
        {
          author: "Matt",
          text: "Sound reasoning!"
        }, {
          author: "Billy Bean",
          text: "Oakland rulez"
        }
      ],
      commentStat: false,
      newCommentVisible: false
    }, {
      title: "New Years",
      author: "Ryan Seacrest",
      image: "https://tribzap2it.files.wordpress.com/2012/12/ryan-seacrest-new-years-rockin-eve-400.jpg",
      description: "Come hang out with me on New Year's Eve!",
      date: '05/09/2015',
      votes: -3,
      comments: [],
      commentsVisible: false,
      newCommentVisible: false
    }, {
      title: "XKCD",
      author: "Randall Munroe",
      image: "http://www.userlogos.org/files/logos/Mafia_Penguin/xkcdLogo.png",
      description: "rofl. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum excepturi ad totam autem dignissimos molestiae a consequatur cupiditate, eum enim. Magni expedita, nam in eligendi sed totam fugiat numquam consequatur.",
      date: '01/08/2010',
      votes: 2,
      comments: [],
      commentsVisible: false,
      newCommentVisible: false
    }
  ]
  $scope.upVote = function(){
    console.log(this);
    this.thing.votes = this.thing.votes+1
  }
  $scope.downVote = function(){
    console.log(this);
    this.thing.votes = this.thing.votes-1
  }
  $scope.activateComments = function(){
    console.log(this.thing.commentStat);
    this.thing.commentStat= !this.thing.commentStat
  }
  $scope.addPost=function(){
    $scope.post.votes = 0;
    $scope.post.date = new Date();
    $scope.post.comments=[]
    console.log($scope.post.date);
    $scope.info.push($scope.post)
    $scope.showPost = false;
  }
  $scope.clearForm = function (form) {
    $scope.post={}
  }
  $scope.revealPostForm = function(){
    $scope.showPost = !$scope.showPost
  }
  $scope.showNewComment = function(){
    this.thing.newCommentVisible = !this.thing.newCommentVisible
  }
  $scope.addComment = function(){
    this.thing.comments.push(this.comment)
    this.comment={}
    this.thing.newCommentVisible = false
    console.log(this.thing.comments);
  }
})

//-----------------Tea Section-----------------------------------------------------------


app.controller("TeaController", function($scope, $http, cartService){
  $scope.line="this works"
  $scope.cart=[]
  $scope.numberOfItems = 0
  $scope.setCategory=function(category){
    console.log(category);
  }
  $scope.addToCart = function(quantity, tea){
    cartService.cart.push({tea:tea,quantity:quantity});
    console.log(cartService.cart);
    $scope.numberOfItems += parseInt(quantity);
  }


  $scope.data = [
      {
          _id: "55c8ee82152165d244b98300",
          name: "Bayard stew",
          ingredients: "concentrated gluten, jewelry, dill, beetle nut, toast",
          caffeineScale: 244,
          price: 1540,
          inStock: true,
          rating: 1,
          imageUrl: "http://s7d5.scene7.com/is/image/Teavana/32664_d?$cimg$",
          __v: 0,
          categories: [ "dark", "cold"]
      },

      {
          _id: "55c8ee82152165d244b98301",
          name: "Incompactness syrup",
          ingredients: "fennel, nutmeg leaves, parsley, cream of 'cream of cream', blarney",
          caffeineScale: 49,
          price: 7348,
          inStock: true,
          rating: 2,
          imageUrl: "http://s7d5.scene7.com/is/image/Teavana/32303_d?$cimg$",
          __v: 0,
          categories: ["awesome"]
      },
      {
          _id: "55c8ee82152165d244b98302",
          name: "Flexner white tea",
          ingredients: "hot sauce, iron, beetle nut, fresco, blarney, raw mashed potato",
          caffeineScale: 38,
          price: 4991,
          inStock: true,
          rating: 4,
          imageUrl: "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
          __v: 0,
          categories: ["cold"]
      },
      {
          _id: "55c8ee82152165d244b98303",
          name: "Pressor leaf",
          ingredients: "purina chow, flavorings, pepper, acorns, quality tallow, old sock, bay leaf",
          caffeineScale: 153,
          price: 5496,
          inStock: true,
          rating: 1,
          imageUrl: "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
          __v: 0,
          categories: ["dry", "hot", "awesome"]
      },
      {
          _id: "55c8ee82152165d244b98304",
          name: "Flexner veggie tea",
          ingredients: "cream of tartar, eggplant, cake, deer antler",
          caffeineScale: 181,
          price: 2445,
          inStock: true,
          rating: 1,
          imageUrl: "http://s7d5.scene7.com/is/image/Teavana/32621_d?$cimg$",
          __v: 0,
          categories: ["summer"]
      },
      {
          _id: "55c8ee82152165d244b98305",
          name: "Topflighter malt",
          ingredients: "botox, toast, cream of 'cream of 'cream of cream'', kitchen scraps, beef, aligator tongue, lawn clippings",
          caffeineScale: 241,
          price: 4486,
          inStock: true,
          rating: 3,
          imageUrl: "http://s7d5.scene7.com/is/image/Teavana/31359_d?$cimg$",
          __v: 0,
          categories: ["dry","lucid","warm"]
      },
      {
          _id: "55c8ee82152165d244b98306",
          name: "Cooking mix",
          ingredients: "flavorings, roasted mushrooms, toast, tumeric",
          caffeineScale: 230,
          price: 6973,
          inStock: true,
          rating: 3,
          imageUrl: "http://s7d5.scene7.com/is/image/Teavana/32303_d?$cimg$",
          __v: 0,
          categories: ["summer"]
      },
      {
          _id: "55c8ee82152165d244b98307",
          name: "Cooking stew",
          ingredients: "eggplant",
          caffeineScale: 122,
          price: 6003,
          inStock: true,
          rating: 2,
          imageUrl: "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
          __v: 0,
          categories: ["dry","winter","lucid"]
      },
      {
          _id: "55c8ee82152165d244b98308",
          name: "Prevenient herb tea",
          ingredients: "cream of tartar, cream of cream, kitchen scraps, flavorings",
          caffeineScale: 196,
          price: 1374,
          inStock: true,
          rating: 3,
          imageUrl: "http://s7d5.scene7.com/is/image/Teavana/32174_d?$cimg$",
          __v: 0,
          categories: ["lucid","hot"]
      },
      {
          _id: "55c8ee82152165d244b98309",
          name: "Angular mix",
          ingredients: "hot sauce, lawn clippings, fennel, parsley, quinine",
          caffeineScale: 196,
          price: 4158,
          inStock: true,
          rating: 2,
          imageUrl: "http://s7d5.scene7.com/is/image/Teavana/32621_d?$cimg$",
          __v: 0,
          categories: ["spring", "warm","winter"]
      }
  ]
})

app.controller("checkoutController", function($scope, cartService){
  $scope.cart = cartService.cart;
  $scope.totalCost = calcCost($scope.cart);
  $scope.showQuantity = false;
  $scope.removeItem = function(index){
    cartService.cart.splice(index, 1);
    $scope.totalCost = calcCost($scope.cart);
  }
  $scope.toggleQuantity = function(){
    this.tea.showQuantity = !this.tea.showQuantity;
  }
  $scope.updateQuantity = function(index, newQuantity){
    cartService.cart[index].quantity = newQuantity;
    $scope.totalCost = calcCost($scope.cart);
  }
})

function calcCost(cart){
  var total=0;
  for (var i = 0; i < cart.length; i++) {
    total += parseInt(cart[i].quantity) * parseInt(cart[i].tea.price)/100
  }
  return total
}


app.service('cartService', function(){
    this.cart = []
})

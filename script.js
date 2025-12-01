const reels = [
    {
        userName: "neymarjr",
        likeCount: '154k',
        isLiked: false,
        commentCount: '3.2k',
        caption: "Training hard and staying focused ⚽🔥",
        video: "/Videos/1.mp4",
        userProfilePic: "https://images.pexels.com/photos/14547930/pexels-photo-14547930.jpeg",
        shareCount: '1.2k',
        isFollowed: false
    },
    {
        userName: "travelwithsara",
        likeCount: '98k',
        isLiked: true,
        commentCount: '1.4k',
        caption: "Sunsets hit different here 🌅✨",
        video: "/Videos/2.mp4",
        userProfilePic: "https://images.pexels.com/photos/2245436/pexels-photo-2245436.png",
        shareCount: 540,
        isFollowed: true
    },
    {
        userName: "techguru",
        likeCount: '45k',
        isLiked: false,
        commentCount: 620,
        caption: "Top 5 gadgets you need in 2025! 🔌💡",
        video: "/Videos/3.mp4",
        userProfilePic: "https://images.pexels.com/photos/4342098/pexels-photo-4342098.jpeg",
        shareCount: 310,
        isFollowed: false
    },
    {
        userName: "fitness_mike",
        likeCount: '210k',
        isLiked: true,
        commentCount: '8.9k',
        caption: "No excuses—just results! 💪🔥",
        video: "/Videos/4.mp4",
        userProfilePic: "https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg",
        shareCount: '4.2k',
        isFollowed: true
    },
    {
        userName: "foodie_diaries",
        likeCount: '76k',
        isLiked: false,
        commentCount: '1.8k',
        caption: "The best pasta I've ever had 🍝🤌",
        video: "/Videos/5.mp4",
        userProfilePic: "https://images.pexels.com/photos/5491340/pexels-photo-5491340.jpeg",
        shareCount: 650,
        isFollowed: true
    },
    {
        userName: "streetphotography",
        likeCount: '54k',
        isLiked: false,
        commentCount: '1.2k',
        caption: "City lights never disappoint 📸✨",
        video: "/Videos/6.mp4",
        userProfilePic: "https://images.pexels.com/photos/34910776/pexels-photo-34910776.jpeg",
        shareCount: 390,
        isFollowed: false
    },
    {
        userName: "gaminglegend",
        likeCount: '310k',
        isLiked: true,
        commentCount: '15.4k',
        caption: "This clutch moment was unreal! 🎮🔥",
        video: "/Videos/7.mp4",
        userProfilePic: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg",
        shareCount: '10.2k',
        isFollowed: false
    },
    {
        userName: "naturelover",
        likeCount: '87k',
        isLiked: false,
        commentCount: '2.6k',
        caption: "Mother nature’s beauty is unmatched 🌿🌄",
        video: "/Videos/8.mp4",
        userProfilePic: "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg",
        shareCount: 480,
        isFollowed: true
    },
    {
        userName: "dancevibes",
        likeCount: '190k',
        isLiked: true,
        commentCount: '7.2k',
        caption: "Late-night freestyle session 🔥🕺",
        video: "/Videos/9.mp4",
        userProfilePic: "https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg",
        shareCount: '3.3k',
        isFollowed: false
    },
    {
        userName: "petpalace",
        likeCount: '125k',
        isLiked: true,
        commentCount: '6.4k',
        caption: "This puppy just made my day 🐶❤️",
        video: "Videos/10.mp4",
        userProfilePic: "https://images.pexels.com/photos/56733/pexels-photo-56733.jpeg",
        shareCount: '2.1k',
        isFollowed: true
    }
];
let allReels = document.querySelector('.allReels');

let sum = '';
reels.forEach(function(elem){
    sum = sum + `<div class="reel">
                    <video autoplay loop muted src=${elem.video}></video>
                    <div class="bottom">
                        <div class="user">
                            <img src=${elem.userProfilePic} alt="">
                            <h4>${elem.userName}</h4>
                            <button>${elem.isFollowed?'unfollow':'follow'}</button>
                        </div>
                        <p>${elem.caption}</p>
                    </div>
                    <div class="panel">
                        <div class="like">
                            <h4>${elem.isLiked?'<i class="ri-heart-3-fill" style="color: crimson; -webkit-text-stroke: 1px white;"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </i></div>
                        <div class="more">
                            <h4><i class="ri-more-2-line"></i></h4>
                        </div>
                    </div>
                </div>`
})

allReels.innerHTML = sum;
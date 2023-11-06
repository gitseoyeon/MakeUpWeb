const postContainer = document.getElementById("post-container");

function createPost(authorName, profileImageUrl, title, content, imageUrl) {
    const postDiv = document.createElement("div");
    postDiv.className = "post";

    const authorInfoDiv = document.createElement("div");
    authorInfoDiv.className = "author-info";

    const profileImage = document.createElement("img");
    profileImage.src = profileImageUrl;
    profileImage.alt = "프로필 사진";
    profileImage.className = "profile-image";

    const authorNameElement = document.createElement("p");
    authorNameElement.textContent = `${authorName}`;

    authorInfoDiv.appendChild(profileImage);
    authorInfoDiv.appendChild(authorNameElement);

    const postTitle = document.createElement("h2");
    postTitle.textContent = title;

    const postContent = document.createElement("p");
    postContent.textContent = content;

    const postImage = document.createElement("img");
    postImage.src = imageUrl;
    postImage.alt = "게시물 이미지";

    postDiv.appendChild(authorInfoDiv);
    postDiv.appendChild(postTitle);
    postDiv.appendChild(postContent);
    postDiv.appendChild(postImage);

    postContainer.appendChild(postDiv);
}

// 예시 게시물 추가
createPost("홍길동", "images/userImage.png", "나만의 뷰티템을 갖고싶다면?!", "Make Your Beauty를 이용해보세요! 당신의 아름다움을 책임집니다!", "images/image1.png");
createPost("토끼끼", "images/userImage2.png", "이것은 두 번째 게시물입니다.", "example2.jpg");
createPost("코덕", "images/userImage3.png", "이것은 세 번째 게시물입니다.", "example3.jpg");

pragma solidity ^0.4.18;


contract Post {

    mapping (address => string) public addressToName;
    
    uint public postIndex = 0;
    mapping (uint => address) public postAuthor;
    mapping (uint => string) public postContent;

    function submitPost(string message) public returns (uint postId) {
        postContent[postIndex] = message;
        postAuthor[postIndex] = msg.sender;
        postIndex++;
        return postIndex - 1;
    }

    function getPost(uint postId) public view returns (address author, string content) {
        return (postAuthor[postId], postContent[postId]);
    }

}
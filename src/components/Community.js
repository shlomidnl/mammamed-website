import React from 'react';
import styled from 'styled-components';

const Community = () => {
  const posts = [
    {
      id: 1,
      author: 'Laura K.',
      avatar: '👩‍🦰',
      time: '2 hours ago',
      content: 'Just had my 12-week ultrasound and everything looks great! Baby was moving around so much, it was incredible to see. Has anyone else experienced a lot of movement this early?',
      likes: 24,
      comments: 8,
      tags: ['First Trimester', 'Ultrasound']
    },
    {
      id: 2,
      author: 'Marta B.',
      avatar: '👩',
      time: '5 hours ago',
      content: 'My iron levels are a bit low according to my latest lab results. My doctor recommended supplements, but I\'m also looking for food suggestions. Any ideas for iron-rich meals that worked for you?',
      likes: 18,
      comments: 12,
      tags: ['Nutrition', 'Iron Levels']
    },
    {
      id: 3,
      author: 'Anete Z.',
      avatar: '👩‍🦱',
      time: 'Yesterday',
      content: 'I\'ve been experiencing some mild morning sickness that lasts all day. Found that eating small meals helps a lot. Also, ginger tea has been a lifesaver! What remedies worked for you?',
      likes: 32,
      comments: 15,
      tags: ['Morning Sickness', 'Remedies']
    },
    {
      id: 4,
      author: 'Dr. Līga K.',
      avatar: '👩‍⚕️',
      time: '2 days ago',
      content: 'Remember that mild swelling in your feet and ankles is normal during pregnancy due to increased blood volume and pressure on your veins. However, sudden or severe swelling can be a sign of preeclampsia. Always mention any concerns to your healthcare provider.',
      likes: 45,
      comments: 3,
      tags: ['Expert Advice', 'Preeclampsia']
    }
  ];

  return (
    <CommunityContainer>
      <InfoBox>
        <InfoIcon>ℹ️</InfoIcon>
        <InfoContent>
          <InfoTitle>Community Support</InfoTitle>
          <InfoText>Connect with other expectant mothers and healthcare professionals. Share experiences and get advice.</InfoText>
        </InfoContent>
      </InfoBox>
      
      <PostsContainer>
        {posts.map(post => (
          <PostCard key={post.id}>
            <PostHeader>
              <AvatarContainer>
                <Avatar>{post.avatar}</Avatar>
              </AvatarContainer>
              <AuthorInfo>
                <AuthorName>{post.author}</AuthorName>
                <PostTime>{post.time}</PostTime>
              </AuthorInfo>
            </PostHeader>
            
            <PostContent>{post.content}</PostContent>
            
            <TagsContainer>
              {post.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </TagsContainer>
            
            <PostActions>
              <ActionButton>
                <ActionIcon>❤️</ActionIcon>
                {post.likes}
              </ActionButton>
              <ActionButton>
                <ActionIcon>💬</ActionIcon>
                {post.comments}
              </ActionButton>
              <ActionButton>
                <ActionIcon>🔗</ActionIcon>
                Share
              </ActionButton>
            </PostActions>
          </PostCard>
        ))}
      </PostsContainer>
      
      <CreatePostButton>
        <AddIcon>✏️</AddIcon>
        Create New Post
      </CreatePostButton>
    </CommunityContainer>
  );
};

const CommunityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #E8F5E9;
  border-left: 4px solid #4CAF50;
  border-radius: 5px;
  padding: 15px;
`;

const InfoIcon = styled.span`
  font-size: 20px;
  margin-right: 10px;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #4CAF50;
  margin: 0 0 5px 0;
`;

const InfoText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #333;
  margin: 0;
`;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const PostCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const AvatarContainer = styled.div`
  margin-right: 10px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #F5F5F5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #333;
`;

const PostTime = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #757575;
`;

const PostContent = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #333;
  line-height: 1.5;
  margin-bottom: 15px;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 15px;
`;

const Tag = styled.div`
  background-color: #F5F5F5;
  border-radius: 15px;
  padding: 5px 10px;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #757575;
`;

const PostActions = styled.div`
  display: flex;
  gap: 15px;
  border-top: 1px solid #F5F5F5;
  padding-top: 10px;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #757575;
  cursor: pointer;
  
  &:hover {
    color: #E91E63;
  }
`;

const ActionIcon = styled.span`
  font-size: 16px;
  margin-right: 5px;
`;

const CreatePostButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #E91E63, #9C27B0);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 15px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const AddIcon = styled.span`
  font-size: 20px;
  margin-right: 10px;
`;

export default Community;

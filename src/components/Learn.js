import React from 'react';
import styled from 'styled-components';

const Learn = () => {
  const categories = [
    { id: 1, name: 'First Trimester', icon: '🌱', color: '#E8F5E9' },
    { id: 2, name: 'Nutrition', icon: '🥗', color: '#FFF3E0' },
    { id: 3, name: 'Exercise', icon: '🧘‍♀️', color: '#E3F2FD' },
    { id: 4, name: 'Baby Development', icon: '👶', color: '#F3E5F5' },
    { id: 5, name: 'Mental Health', icon: '🧠', color: '#E0F7FA' },
    { id: 6, name: 'Preparing for Birth', icon: '🏥', color: '#FBE9E7' }
  ];
  
  const featuredArticles = [
    {
      id: 1,
      title: 'Understanding Your First Trimester Lab Results',
      category: 'First Trimester',
      readTime: '5 min read',
      image: '🧪',
      color: '#E8F5E9'
    },
    {
      id: 2,
      title: 'Iron-Rich Foods for a Healthy Pregnancy',
      category: 'Nutrition',
      readTime: '7 min read',
      image: '🍲',
      color: '#FFF3E0'
    },
    {
      id: 3,
      title: 'Safe Exercises During Your First Trimester',
      category: 'Exercise',
      readTime: '6 min read',
      image: '🧘‍♀️',
      color: '#E3F2FD'
    },
    {
      id: 4,
      title: 'Week 12: Your Baby\'s Development',
      category: 'Baby Development',
      readTime: '4 min read',
      image: '👶',
      color: '#F3E5F5'
    }
  ];
  
  return (
    <LearnContainer>
      <InfoBox>
        <InfoIcon>ℹ️</InfoIcon>
        <InfoContent>
          <InfoTitle>Educational Resources</InfoTitle>
          <InfoText>Explore articles and videos about pregnancy, baby development, and maternal health.</InfoText>
        </InfoContent>
      </InfoBox>
      
      <SearchContainer>
        <SearchIcon>🔍</SearchIcon>
        <SearchInput placeholder="Search for topics..." />
      </SearchContainer>
      
      <CategoriesTitle>Categories</CategoriesTitle>
      <CategoriesGrid>
        {categories.map(category => (
          <CategoryCard key={category.id} style={{ backgroundColor: category.color }}>
            <CategoryIcon>{category.icon}</CategoryIcon>
            <CategoryName>{category.name}</CategoryName>
          </CategoryCard>
        ))}
      </CategoriesGrid>
      
      <FeaturedTitle>Featured Articles</FeaturedTitle>
      <ArticlesList>
        {featuredArticles.map(article => (
          <ArticleCard key={article.id}>
            <ArticleImageContainer style={{ backgroundColor: article.color }}>
              <ArticleImage>{article.image}</ArticleImage>
            </ArticleImageContainer>
            <ArticleContent>
              <ArticleCategory>{article.category}</ArticleCategory>
              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleReadTime>{article.readTime}</ArticleReadTime>
            </ArticleContent>
          </ArticleCard>
        ))}
      </ArticlesList>
      
      <WeeklyUpdateCard>
        <WeeklyUpdateIcon>📅</WeeklyUpdateIcon>
        <WeeklyUpdateContent>
          <WeeklyUpdateTitle>Your Week 12 Update</WeeklyUpdateTitle>
          <WeeklyUpdateText>Learn about your baby's development and changes in your body during week 12 of pregnancy.</WeeklyUpdateText>
          <WeeklyUpdateButton>Read Now</WeeklyUpdateButton>
        </WeeklyUpdateContent>
      </WeeklyUpdateCard>
    </LearnContainer>
  );
};

const LearnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #F3E5F5;
  border-left: 4px solid #9C27B0;
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
  color: #9C27B0;
  margin: 0 0 5px 0;
`;

const InfoText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #333;
  margin: 0;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  padding: 10px 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

const SearchIcon = styled.span`
  font-size: 18px;
  margin-right: 10px;
  color: #757575;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #333;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: #BDBDBD;
  }
`;

const CategoriesTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #333;
  margin: 10px 0 5px 0;
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  }
`;

const CategoryIcon = styled.div`
  font-size: 24px;
  margin-bottom: 5px;
`;

const CategoryName = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: #333;
  text-align: center;
`;

const FeaturedTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #333;
  margin: 10px 0 5px 0;
`;

const ArticlesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ArticleCard = styled.div`
  display: flex;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ArticleImageContainer = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArticleImage = styled.div`
  font-size: 30px;
`;

const ArticleContent = styled.div`
  flex: 1;
  padding: 10px 15px;
`;

const ArticleCategory = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #757575;
  margin-bottom: 5px;
`;

const ArticleTitle = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #333;
  margin: 0 0 5px 0;
`;

const ArticleReadTime = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #9C27B0;
`;

const WeeklyUpdateCard = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #E91E63, #9C27B0);
  border-radius: 10px;
  padding: 15px;
  margin-top: 10px;
  color: white;
`;

const WeeklyUpdateIcon = styled.div`
  font-size: 30px;
  margin-right: 15px;
`;

const WeeklyUpdateContent = styled.div`
  flex: 1;
`;

const WeeklyUpdateTitle = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  margin: 0 0 5px 0;
`;

const WeeklyUpdateText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  margin: 0 0 10px 0;
`;

const WeeklyUpdateButton = styled.button`
  background-color: white;
  color: #E91E63;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

export default Learn;

import styled from 'styled-components'

export const TravelGuideContainer = styled.div`
  background-color: #eef4f7;
  height: 100vh;
  overflow-y: scroll;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeadingContainer = styled.div`
  border-bottom: 3px solid #52bbf0;
  width: 150px;
  margin-top: 20px;
`

export const TravelGuideHeading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`

export const DestinationContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  width: 800px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`
export const EachDestinationItem = styled.li`
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export const ImageElement = styled.img`
  width: 300px;
`

export const TextContainer = styled.div`
  background-color: #ffffff;
  width: 300px;
  padding: 10px;
`

export const NameText = styled.h1`
  font-size: 15px;
  font-family: 'Roboto';
  color: #475569;
  font-weight: 500;
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: #64748b;
`
export const LoaderContainer = styled.div`
  margin-top: 200px;
`

import {
  EachDestinationItem,
  ImageElement,
  TextContainer,
  NameText,
  Description,
} from '../../styledComponents'

const DestinationItem = props => {
  const {eachDestinationDetails} = props

  const {name, imageUrl, description} = eachDestinationDetails

  return (
    <EachDestinationItem>
      <ImageElement src={imageUrl} alt={name} />
      <TextContainer>
        <NameText>{name}</NameText>
        <Description>{description}</Description>
      </TextContainer>
    </EachDestinationItem>
  )
}

export default DestinationItem

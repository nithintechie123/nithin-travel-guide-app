import {Component} from 'react'

import Loader from 'react-loader-spinner'

import DestinationItem from '../DestinationItem'

import {
  TravelGuideContainer,
  HeadingContainer,
  TravelGuideHeading,
  DestinationContainer,
  LoaderContainer,
} from '../../styledComponents'

class TravelGuide extends Component {
  state = {travelGuideList: [], isLoading: false}

  componentDidMount = () => {
    this.getTravelGuidePackageUrl()
  }

  getTravelGuidePackageUrl = async () => {
    this.setState({isLoading: true})

    const apiUrl = 'https://apis.ccbp.in/tg/packages'

    const options = {method: 'GET'}

    const response = await fetch(apiUrl, options)

    const travelGuideData = await response.json()

    if (response.ok === true) {
      const updatedData = travelGuideData.packages.map(eachDestination => ({
        id: eachDestination.id,
        name: eachDestination.name,
        imageUrl: eachDestination.image_url,
        description: eachDestination.description,
      }))
      this.setState({travelGuideList: updatedData, isLoading: false})
    }
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </LoaderContainer>
  )

  renderDestinationContent = () => {
    const {travelGuideList} = this.state
    return (
      <DestinationContainer>
        {travelGuideList.map(eachDestination => (
          <DestinationItem
            key={eachDestination.id}
            eachDestinationDetails={eachDestination}
          />
        ))}
      </DestinationContainer>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <TravelGuideContainer>
        <HeadingContainer>
          <TravelGuideHeading>Travel Guide</TravelGuideHeading>
        </HeadingContainer>
        {isLoading ? this.renderLoader() : this.renderDestinationContent()}
      </TravelGuideContainer>
    )
  }
}

export default TravelGuide

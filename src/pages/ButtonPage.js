import Button from '../components/Button'
import { GoBell, GoCloudDownload } from 'react-icons/go'

function ButtonPage() {
  return (
    <div>
      <div>
        <Button className='mb-5' secondary rounded>
          <GoBell />
          Click Me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>See Deal!</Button>
      </div>
      <div>
        <Button secondary>Hide Ads!</Button>
      </div>
      <div>
        <Button primary rounded>
          <GoCloudDownload />
          Something!
        </Button>
      </div>
    </div>
  )
}

export default ButtonPage

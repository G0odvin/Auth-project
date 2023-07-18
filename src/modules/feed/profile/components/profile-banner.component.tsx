import { Container } from "../../../../components/container/container.component"
import { FollowButton } from "./follow-button.component"

export const ProfileBanner = () => {
  return (
    <div className="bg-theme-tagCloudBg pt-8 pb-4">
      <Container>
        <div> 
          <img src="https://api.realworld.io/images/demo-avatar.png" className="w-25 h-25 rounded-full mx-auto" alt="username avatar"/>
          <h2 className="text-center font-bold text-2xl">Magda Perry</h2>
        </div>
        <div className="flex justify-end">
          <FollowButton />
        </div>
      </Container>
    </div>
  )
}

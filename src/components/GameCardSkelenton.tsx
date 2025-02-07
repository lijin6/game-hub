import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

function GameCardSkelenton() {
  return (
    <Card width={'300px'} borderEndRadius={10} overflow="hidden">
        <Skeleton height={'200px'} />
        <CardBody>
          <SkeletonText/>
        </CardBody>

    </Card>
  )
}

export default GameCardSkelenton
import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

function GameCardSkelenton() {
  return (
    <Card >
        <Skeleton height={'200px'} />
        <CardBody>
          <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default GameCardSkelenton
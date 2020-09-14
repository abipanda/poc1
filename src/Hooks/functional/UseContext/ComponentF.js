import React from 'react'
import { UserContext, ChannelContext } from './../../../App'

function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return <div>User context value <b>{user}</b>, channel context value <b>{channel}</b></div>
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>

        </div>
    )
}

export default ComponentF

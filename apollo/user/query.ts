import { gql } from '@apollo/client';

/*******************
 *    PROPERTY    * 
 ******************/
export const GET_PROPERTIES = gql`query GetPropertie($input: PropertiesInquiry!) {
    getProperties(input: $input) {
        metaCounter {
            total
        }
        list {
            _id
            propertyType
            propertyStatus
            propertyLocation
            propertyAddress
            propertyTitle
            propertyPrice
            propertySquare
            propertyBeds
            propertyRooms
            propertyViews
            propertyLikes
            propertyComments
            propertyRank
            propertyImages
            propertyDesc
            propertyBarter
            propertyRent
            memberId
            soldAt
            deletedAt
            constructedAt
            createdAt
            updatedAt
            meLiked {
                memberId
                likeRefId
                myFavorite
            }
            memberData {
                _id
                memberType
                memberStatus
                memberAuthType
                memberPhone
                memberNick
                memberFullName
                memberImage
                memberAddress
                memberDesc
                memberProperties
                memberArticles
                memberFollowers
                memberFollowings
                memberPoints
                memberLikes
                memberViews
                memberComments
                memberRank
                memberWarnings
                memberBlocks
                deletedAt
                createdAt
                updatedAt
                accessToken
            }
        }
    }
}`;



/*******************
 *    ARTICLES    * 
 ******************/ 
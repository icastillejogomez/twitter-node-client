/*
 Twitter client app
 */

var OAuth = require('oauth').OAuth;
var qs = require('qs');

function Twitter(config) {
  this.consumerKey = config.consumerKey;
  this.consumerSecret = config.consumerSecret;
  this.accessToken = config.accessToken;
  this.accessTokenSecret = config.accessTokenSecret;
  this.callBackUrl = config.callBackUrl;
  this.baseUrl = 'https://api.twitter.com/1.1';
  this.oauth = new OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      this.consumerKey,
      this.consumerSecret,
      '1.0',
      this.callBackUrl,
      'HMAC-SHA1'
  );
}

Twitter.prototype.getOAuthRequestToken = function (next) {
    this.oauth.getOAuthRequestToken(function (error, oauth_token, oauth_token_secret, results) {
        if (error) {
            console.log('ERROR: ' + error);
            next();
        }
        else {
            var oauth = {};
            oauth.token = oauth_token;
            oauth.token_secret = oauth_token_secret;
            console.log('oauth.token: ' + oauth.token);
            console.log('oauth.token_secret: ' + oauth.token_secret);
            next(oauth);
        }
    });
};

Twitter.prototype.getOAuthAccessToken = function (oauth, next) {
    this.oauth.getOAuthAccessToken(oauth.token, oauth.token_secret, oauth.verifier,
        function (error, oauth_access_token, oauth_access_token_secret, results) {
            if (error) {
                console.log('ERROR: ' + error);
                next();
            } else {
                oauth.access_token = oauth_access_token;
                oauth.access_token_secret = oauth_access_token_secret;

                console.log('oauth.token: ' + oauth.token);
                console.log('oauth.token_secret: ' + oauth.token_secret);
                console.log('oauth.access_token: ' + access_token.token);
                console.log('oauth.access_token_secret: ' + oauth.access_token_secret);
                next(oauth);
            }
        }
    );
};

Twitter.prototype.postMedia = function (params, error, success) {
    var url = 'https://upload.twitter.com/1.1/media/upload.json';
    this.doPost(url, params, error, success);
};

Twitter.prototype.postMediaMetadataCreate = function (params, error, success) {
    var url = 'https://upload.twitter.com/1.1/media/metadata/create.json';
    this.doPost(url, params, error, success);
};

Twitter.prototype.postTweet = function (params, error, success) {
    var path = '/statuses/update.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postMediaUploadINIT = function (params, error, success) {
    var path = '/media/upload.json';
    var url = 'https://upload.twitter.com/1.1' + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postMediaUploadAPPEND = function (params, error, success) {
    var path = '/media/upload.json'  + this.buildQS(params);
    var url = 'https://upload.twitter.com/1.1' + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.postMediaUploadFINALIZE = function (params, error, success) {
    var path = '/media/upload.json'  + this.buildQS(params);
    var url = 'https://upload.twitter.com/1.1' + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.postAccountSettings = function (params, error, success) {
    var path = '/account/settings.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postCollectionsCreate = function (params, error, success) {
    var path = '/collections/create.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postCollectionsUpdate = function (params, error, success) {
    var path = '/collections/destroy.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postDirectMessagesDestroy = function (params, error, success) {
    var path = '/collections/update.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postDirectMessagesCreate = function (params, error, success) {
    var path = '/direct_messages/new.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postFavoritesCreate = function (params, error, success) {
    var path = '/favorites/create.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postFavoritesDestroy = function (params, error, success) {
    var path = '/favorites/destroy.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postFriendshipsCreate = function (params, error, success) {
    var path = '/friendships/create.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postFriendshipsDestroy = function (params, error, success) {
    var path = '/friendships/destroy.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postFriendshipsUpdate = function (params, error, success) {
    var path = '/friendships/update.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postListCreate = function (params, error, success) {
    var path = '/lists/create.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postListDestroy = function (params, error, success) {
    var path = '/lists/destroy.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postListUpdate = function (params, error, success) {
    var path = '/lists/update.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postListMembersCreateAll = function (params, error, success) {
    var path = '/lists/members/create_all.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postListMembersDestroy = function (params, error, success) {
    var path = '/lists/members/destroy.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postListMembersDestroyAll = function (params, error, success) {
    var path = '/lists/members/destroy_all.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postListSubscribersCreate = function (params, error, success) {
    var path = '/lists/subscribers/create.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postListSubscribersDestroy = function (params, error, success) {
    var path = '/lists/subscribers/destroy.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postCollectionsDestroy = function (params, error, success) {
    var path = '/collections/destroy.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postBlocksCreate = function (params, error, success) {
    var path = '/blocks/create.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postBlocksDestroy = function (params, error, success) {
    var path = '/blocks/destroy.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postAccountUpdateProfileImage = function (params, error, success) {
    var path = '/account/update_profile_image.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postAccountUpdateProfileBanner = function (params, error, success) {
    var path = '/account/update_profile_banner.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postAccountUpdateProfileBackgroundImage = function (params, error, success) {
    var path = '/account/update_profile_background_image.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postAccountUpdateProfile = function (params, error, success) {
    var path = '/account/update_profile.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postCollectionsEntriesMove = function (params, error, success) {
    var path = '/collections/entries/move.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postCollectionsEntriesRemove = function (params, error, success) {
    var path = '/collections/entries/remove.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postCreateFriendship = function (params, error, success) {
    var path = '/friendships/create.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postRemoveProfileBanner = function (error, success) {
    var path = '/account/remove_profile_banner.json';
    var url = this.baseUrl + path;
    this.doPost(url, null , error, success);
};

Twitter.prototype.postCollectionsEntriesAdd = function (params, error, success) {
    var path = '/collections/entries/add.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.postCollectionsEntriesCurate = function (error, success) {
    var path = '/collections/entries/curate.json';
    var url = this.baseUrl + path;
    this.doPost(url, null, error, success);
};

Twitter.prototype.getTrensAvailable = function (error, success) {
    var path = '/trends/available.json';
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getTrensClosest = function (params, error, success) {
    var path = '/trends/closest.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getTrensPlace = function (params, error, success) {
    var path = '/trends/place.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getUserTimeline = function (params, error, success) {
    var path = '/statuses/user_timeline.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getOembed = function (params, error, success) {
    var encodedQuery = encodeURIComponent(params.url);
    delete params.url;
    var path = '/oembed?url=' + encodedQuery +'&'+ qs.stringify(params);
    var url = 'https://publish.twitter.com' + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getStatusesRetweetersIds = function (params, error, success) {
    var path = '/statuses/retweeters/ids.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getStatusesRetweets = function (params, error, success) {
    var path = '/statuses/retweets/:id.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getStatusesLookup = function (params, error, success) {
    var path = '/statuses/lookup.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getStatusesRetweetsOfMe = function (params, error, success) {
    var path = '/statuses/retweets_of_me.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getMentionsTimeline = function (params, error, success) {
    var path = '/statuses/mentions_timeline.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getAccountSettings = function (error, success) {
    var path = '/account/settings.json';
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getRateLimitStatus = function (params, error, success) {
    var path = '/application/rate_limit_status.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getUserProfileBanner = function (params, error, success) {
    var path = '/users/profile_banner.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.searchUsers = function (params, error, success) {
    var path = '/users/search.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.verifyCredentials = function (params, error, success) {
    var path = '/account/verify_credentials.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getUsersLookup = function (params, error, success) {
    var path = '/users/lookup.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getUserSuggestions = function (params, error, success) {
    var path = '/users/suggestions.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getUserSuggestionsSlug = function (params, error, success) {
    var path = '/users/suggestions/:slug.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getUserSuggestionsSlugMembers = function (params, error, success) {
    var path = '/users/suggestions/:slug/members.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getBlocksIds = function (params, error, success) {
    var path = '/blocks/ids.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getBlocksList = function (params, error, success) {
    var path = '/blocks/list.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getDirectMessagesEventsList = function (params, error, success) {
    var path = '/direct_messages/events/show.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getMostRecentSentDirectMessages = function (params, error, success) {
    var path = '/direct_messages/sent.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getCollectionsEntries = function (params, error, success) {
    var path = '/collections/entries.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getCollectionsList = function (params, error, success) {
    var path = '/collections/list.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getCollections = function (params, error, success) {
    var path = '/collections/show.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getMostRecentDirectMessages = function (params, error, success) {
    var path = '/direct_messages.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getMentionsTimeline = function (params, error, success) {
    var path = '/statuses/mentions_timeline.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getHomeTimeline = function (params, error, success) {
    var path = '/statuses/home_timeline.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getDirectMessages = function (params, error, success) {
    var path = '/direct_messages/show.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getdirectMessagesWelcomeMessagesList = function (params, error, success) {
    var path = '/direct_messages/welcome_messages/list.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.directMessagesWelcomeMessagesRulesList = function (params, error, success) {
    var path = '/direct_messages/welcome_messages/rules/list.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.directMessagesWelcomeMessagesRule = function (params, error, success) {
    var path = '/direct_messages/welcome_messages/rules/show.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getDirectMessagesWelcomeMessage = function (params, error, success) {
    var path = '/direct_messages/welcome_messages/show.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getFavoritesList = function (params, error, success) {
    var path = '/favorites/list.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getReTweetsOfMe = function (params, error, success) {
    var path = '/statuses/retweets_of_me.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getTweet = function (params, error, success) {
    var path = '/statuses/show.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getSearchTweets  = function (params, error, success) {
    var encodedQuery = encodeURIComponent(params.q);
    delete params.q;
    var path = '/search/tweets.json?q=' + encodedQuery +'&'+ qs.stringify(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getUser = function (params, error, success) {
    var path = '/users/show.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getFollowersList = function (params, error, success) {
    var path = '/followers/list.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getFriendsList = function (params, error, success) {
    var path = '/friends/list.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getFriendshipsIncoming = function (params, error, success) {
    var path = '/friendships/incoming.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getFriendshipsLookup = function (params, error, success) {
    var path = '/friendships/lookup.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getFriendshipsNoRetweetsIds = function (params, error, success) {
    var path = '/friendships/no_retweets/ids.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getFriendshipsOutgoing = function (params, error, success) {
    var path = '/friendships/outgoing.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getFriendship = function (params, error, success) {
    var path = '/friendships/show.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getGeoPlace = function (params, error, success) {
    var path = '/geo/id/:place_id.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getReverseGeocode = function (params, error, success) {
    var path = '/geo/reverse_geocode.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getGeoSearch = function (params, error, success) {
    var path = '/geo/search.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getHelpConfiguration = function ( error, success) {
    var path = '/help/configuration.json';
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getHelpLanguages = function ( error, success) {
    var path = '/help/languages.json';
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getHelpPrivacy = function ( error, success) {
    var path = '/help/privacy.json';
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getHelpTos = function ( error, success) {
    var path = '/help/tos.json';
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getListsList = function (params, error, success) {
    var path = '/lists/list.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getListsMembers = function (params, error, success) {
    var path = '/lists/members.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getListsMember = function (params, error, success) {
    var path = '/lists/members/show.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getListsMemberships = function (params, error, success) {
    var path = '/lists/memberships.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getListsOwnerships = function (params, error, success) {
    var path = '/lists/ownerships.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getList = function (params, error, success) {
    var path = '/lists/show.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getListsStatuses = function (params, error, success) {
    var path = '/lists/statuses.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getListsSubscribers = function (params, error, success) {
    var path = '/lists/subscribers.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getListsSubscriber = function (params, error, success) {
    var path = '/lists/subscribers/show.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getListsSubscriptions = function (params, error, success) {
    var path = '/lists/subscriptions.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getMediaUploadStatus = function (params, error, success) {
    var path = '/media/upload.json' + this.buildQS(params);
    var url = 'https://upload.twitter.com/1.1' + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getMutesUsersList = function (params, error, success) {
    var path = '/mutes/users/list.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getSavedSearchesList = function (error, success) {
    var path = '/saved_searches/list.json';
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getSavedSearch = function (params, error, success) {
    var path = '/saved_searches/show/:id.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getMutesUsersIds = function (params, error, success) {
    var path = '/mutes/users/ids.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getFollowersIds = function (params, error, success) {
    var path = '/followers/ids.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getFriendsIds = function (params, error, success) {
    var path = '/friends/ids.json' + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.getCustomApiCall = function (url, params, error, success) {
    var path =  url + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doRequest(url, error, success);
};

Twitter.prototype.postCustomApiCall = function (url, params, error, success) {
    var path =  url + this.buildQS(params);
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

Twitter.prototype.doRequest = function (url, error, success) {
    // Fix the mismatch between OAuth's  RFC3986's and Javascript's beliefs in what is right and wrong ;)
    // From https://github.com/ttezel/twit/blob/master/lib/oarequest.js
    url = url.replace(/\!/g, "%21")
             .replace(/\'/g, "%27")
             .replace(/\(/g, "%28")
             .replace(/\)/g, "%29")
             .replace(/\*/g, "%2A");

    this.oauth.get( url, this.accessToken, this.accessTokenSecret, function (err, body, response) {
        console.log('URL [%s]', url);
        if (!err && response.statusCode == 200) {
            success(body);
        } else {
            error(err, response, body);
        }
    });
};

Twitter.prototype.doPost = function (url, post_body, error, success) {
    // Fix the mismatch between OAuth's  RFC3986's and Javascript's beliefs in what is right and wrong ;)
    // From https://github.com/ttezel/twit/blob/master/lib/oarequest.js
    url = url.replace(/\!/g, "%21")
             .replace(/\'/g, "%27")
             .replace(/\(/g, "%28")
             .replace(/\)/g, "%29")
             .replace(/\*/g, "%2A");
    //(url, oauth_token, oauth_token_secret, post_body, post_content_type, callback
    console.log(JSON.stringify(post_body))
    this.oauth.post(url, this.accessToken, this.accessTokenSecret, post_body, "application/x-www-form-urlencoded", function (err, body, response) {
        console.log('URL [%s]', url);
        if (!err && response.statusCode == 200) {
            success(body);
        } else {
            error(err, response, body);
        }
    });
};

Twitter.prototype.buildQS = function (params) {
    if (params && Object.keys(params).length > 0) {
        return '?' + qs.stringify(params);
    }
    return '';
};

if (!(typeof exports === 'undefined')) {
    exports.Twitter = Twitter;
}

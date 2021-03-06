function confMember(userId,voiceUserId,callerIdNum,callerIdName,muted,speaking,callingWith,locked = false){
    this.userId = userId;
    this.voiceUserId = voiceUserId;
    this.callerIdName = callerIdName;
    this.callerIdNum = callerIdNum;
    this.muted = muted;
    this.speaking = speaking;
    this.callingWith = callingWith;
}

// getters and setters is pending todo

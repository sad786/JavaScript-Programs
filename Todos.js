let todos = {
    day:'Friday',
    meetings:0,
    meetingsDone:0,

    addMeeting:function(meetings)
    {
        this.meetings = this.meetings+meetings
    },

    changeDay:function(day)
    {
        this.day = day
    },

    meetingDone:function(meet)
    {
        this.meetings = this.meetings-meet
        this.meetingsDone = this.meetingsDone+meet
    },

    summary:function()
    {
        console.log(`Day=${this.day}\nMeetings Done=${this.meetingsDone}\nMeetings remain=${this.meetings}`)
    },
}

todos.addMeeting(4)
todos.addMeeting(5)

todos.meetingDone(6)
todos.changeDay('Saturday')
todos.summary()
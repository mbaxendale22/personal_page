import ScreenRoot from '../ScreenRoot'
import Subtitle from '../../components/typography/Subtitle'
import cycleTracking from '../../assets/gifs/cycle-tracking.gif'
import createLog from '../../assets/gifs/short-log.gif'
import calendarList from '../../assets/gifs/calendar-list.gif'
import dailyObservation from '../../assets/gifs/observation.gif'
import './yllwGuides.css'
function YllwHowToScreen() {
    return (
        <ScreenRoot>
            <main className="main" style={{ paddingTop: '1rem' }}>
                <Subtitle content={'How should I use Yllw?'} />
                <p>
                    Yllw is designed to mark points in your day at which you
                    reflect on how triggers may be affecting you. Using a system
                    of color co-ordination and easy to scan icons, it then
                    allows you to see how activities begin to correlate with
                    increased or decreased symptoms over time.
                </p>

                <section>
                    <h2 className="title">The Calendar List</h2>
                    <h3 className="subtitle">Time Traveling</h3>
                    <p>
                        {' '}
                        Yllw introduces a different kind of calendar. You can't
                        track symptoms you haven't experience yet so it is not
                        important to be able to go forwards in time - only
                        backwards. So, in Yllw, your calendar is an infinitely
                        scrolling list, starting on the current date and going
                        backwards.{' '}
                    </p>
                    <div className="gifs">
                        {' '}
                        <img src={calendarList} />
                    </div>

                    <h3 className="subtitle">Color Coordinating</h3>
                    <p>
                        On each day, you'll see an aggregate of all the
                        activities you've marked that day. If you've taken 3
                        showers, you'll still only see the shower icon once.
                        There are two important colors that can show up on each
                        day. The first is the color of the day card itself. It
                        will be a shade of yellow corresponding to the severity
                        of your symptoms that day - or white, if no symptoms
                        were recorded.
                        <br />
                        <br /> The second color surrounds the number, it will
                        either be black, blue, or pink. These correspond to days
                        in your cycle - if you've chose to keep that feature on.
                        You can turn it off in settings at any time. Blue is for
                        ovulation days, pink for period days, and black for the
                        rest of the cycle.
                    </p>
                    <div className="gifs">{/* <img src={edata} /> */}</div>
                </section>

                <section>
                    <h2 className="title">Making a Log</h2>
                    <p>
                        Making logs is the primary activity in Yllw. To do it,
                        press the day you want to make a log for. On the next
                        screen press the 'add new log' button. Now can you add a
                        log. Simply check the activities you want to record. You
                        can add further details about any activity, including
                        the details about the symptom severity score.
                        <br />
                        <br />
                        You can edit or delete a log in the future by pressing
                        on it. Additionally you can change the time of the log
                        you want to create by pressing on the time at the top of
                        the log screen.
                    </p>
                    <div className="gifs">
                        {' '}
                        <img src={createLog} />
                    </div>
                </section>

                <section>
                    <h2 className="title">Daily Observation</h2>
                    <p>
                        In addition to making logs, you can make one observation
                        each day. This won't show up as an icon or a color
                        anywhere, it's just space for you to reflect on any
                        specific about that day you think are important. You
                        could use it to summarize how you felt overall that day
                        or add details of an activity not covered on by the
                        logs. Again, this observation can be viewed, edited, or
                        deleted.
                    </p>
                    <div className="gifs">
                        {' '}
                        <img src={dailyObservation} />
                    </div>
                </section>
                <section>
                    <h2 className="title">Cycle Tracking</h2>
                    <p>
                        You can track your menstrual cycle in Yllw. Remember
                        that Yllw does not store your data anywhere other than
                        your phone. Unlike some other apps -- **cough Flo
                        cough** -- if you choose to track your cycle in Yllw, it
                        will never leave your device. To do this, simply toggle
                        the appropriate switch. Yllw doesn't predict your next
                        cycle, it simply tracks it as another factor that may
                        affect your symptom severity.
                    </p>
                    <div className="gifs">
                        {' '}
                        <img src={cycleTracking} />
                    </div>
                </section>
            </main>
        </ScreenRoot>
    )
}

export default YllwHowToScreen

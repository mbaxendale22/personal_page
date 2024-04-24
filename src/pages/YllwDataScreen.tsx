import ScreenRoot from '../ScreenRoot'
import Subtitle from '../components/typography/Subtitle'
import idata from '../assets/gifs/import-data.gif'
import edata from '../assets/gifs/export-data.gif'
import './yllwGuides.css'

function YllwDataScreen() {
    return (
        <ScreenRoot>
            <main className="main">
                <Subtitle content={'Import / Export Data'} />
                <h2>Why do I need to export my data?</h2>
                <p>
                    Privacy is a top priority for Yllw. Your data is accessible
                    only to you and no one else. Not even the developer. This
                    means that if you want to move Yllw to a different device,
                    or maybe you want to uninstall Yllw for now but reinstall in
                    the future, you have to handle taking your data with you.
                    Yllw makes this process very straight-forward with it's
                    import/export feature.{' '}
                </p>

                <section>
                    <h2 className="title">How to export your data</h2>
                    <div className="gifs">
                        <img src={edata} />
                    </div>
                    <ol className="data-steps">
                        <li>
                            {' '}
                            <span>1.</span> Hit the cog icon in the top left
                            corner to go to the settings page Yllw.
                        </li>
                        <li>
                            {' '}
                            <span>2.</span> Press the 'export data' button.
                        </li>
                        <li>
                            {' '}
                            <span>3.</span> Select a place to store your data
                            backup. This can be anywhere on your device.
                        </li>
                        <li>
                            {' '}
                            <span>4.</span> Choose 'allow' and you are done!
                        </li>
                    </ol>
                    <p>
                        You can do anything you choose with your data backup.
                        Store on Google Drive, send it to yourself by email or
                        messaging service etc., or just keep it on your device.
                        Just don't change the name of the file if you plan on
                        importing later. It doesn't matter where it is stored
                        but it must be called 'yllw.db'
                    </p>
                </section>

                <section>
                    <h2 className="title">How to import your data</h2>
                    <div className="gifs">
                        <img src={idata} />
                    </div>
                    <ol className="data-steps">
                        <li>
                            {' '}
                            <span>1.</span> Hit the cog icon in the top left
                            corner to go to the settings page.
                        </li>
                        <li>
                            {' '}
                            <span>2.</span> Press the 'import data' button.
                        </li>
                        <li>
                            {' '}
                            <span>3.</span>
                            Select your backup database file. It should be
                            wherever you stored it when you exported it. That's
                            it, you're done!
                        </li>
                    </ol>
                </section>
            </main>
        </ScreenRoot>
    )
}

export default YllwDataScreen

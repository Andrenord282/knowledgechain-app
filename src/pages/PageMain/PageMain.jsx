//-----widgets-----//
import PostList from 'widgets/PostList';

//-----style-----//
import './PageMain.scss';

const PageMain = () => {
    return (
        <section className="page-main">
            <div className="page-main__container">
                <div className="page-main__content">
                    <PostList classes="page-main-post-list" />
                </div>
            </div>
        </section>
    );
};

export default PageMain;

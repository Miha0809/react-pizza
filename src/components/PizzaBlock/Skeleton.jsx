import ContentLoader from 'react-content-loader';

export const Skeleton = () => {
    return (
        <ContentLoader
              className="pizza-block"
              speed={2}
              width={280}
              height={500}
              viewBox="0 0 280 500"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <circle cx="134" cy="128" r="120" />
              <rect x="0" y="273" rx="10" ry="10" width="280" height="23" />
              <rect x="0" y="314" rx="10" ry="10" width="280" height="88" />
              <rect x="0" y="430" rx="15" ry="15" width="110" height="30" />
              <rect x="120" y="420" rx="24" ry="24" width="160" height="45" />
            </ContentLoader>
    )
}
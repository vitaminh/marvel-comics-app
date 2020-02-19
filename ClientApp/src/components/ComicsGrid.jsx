import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardBody, CardTitle, CardGroup
} from 'reactstrap';
import React from 'react';

const ComicsGrid = (props) => {
  return (
    <div>
      <CardGroup className="mx-auto" style={{ width: '64rem' }}>
        {props.comicList.map(comic => {
          const coverImgUrl = comic.thumbnail.path + '.' + comic.thumbnail.extension;
          return (
            <div key={comic.id}>
              <Link to={`/comics/${comic.id}`}>
                <Card className="text-center" style={{ width: '16rem' }}>
                  <CardImg top src={coverImgUrl} />
                  <CardBody>
                    <CardTitle>{comic.title}</CardTitle>
                  </CardBody>
                </Card>
              </Link>
            </div>
          )})}
      </CardGroup>
    </div>
  )
}

export default ComicsGrid;
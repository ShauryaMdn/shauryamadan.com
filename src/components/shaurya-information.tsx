import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';

import './component-styles.scss'
import { Row, Container } from 'reactstrap';

export function ShauryaInformation() {
    let hiddenClass;
    let setHiddenClass: Dispatch<SetStateAction<string>>;
    [hiddenClass, setHiddenClass] = useState("info-hidden");

    useEffect(() => {
        return setHiddenClass("");
    })

    return (
        <Container fluid className={`info-container ${hiddenClass}`} id="information">
            <div className="name-container">
                <Row className="justify-content-center name">Shaurya</Row>
                <Row className="justify-content-center name">Madan</Row>
            </div>
            <Row className="justify-content-center description">Computer Engineer</Row>
        </Container>
    );
}

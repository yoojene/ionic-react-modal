import MessageListItem from '../components/MessageListItem';
import { createRef, useEffect, useRef, useState } from 'react';
import { Message, getMessages } from '../data/messages';
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import { Keyboard } from '@capacitor/keyboard';

import './Home.css';

const Home: React.FC = () => {

  const [messages, setMessages] = useState<Message[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);

  const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  function dismiss() {
    modal.current?.dismiss();
  }

    const contentRef = createRef<HTMLIonContentElement>();


  Keyboard.addListener('keyboardDidShow', (info: any) => {
    console.log('keyboard did show with height:', info.keyboardHeight);
            contentRef.current?.scrollToBottom(500);


  });

  Keyboard.addListener('keyboardDidHide', () => {
  console.log('keyboard did hide');
          contentRef.current?.scrollToTop(500);

});

  return (
    <IonPage  ref={page} id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inbox</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Inbox
            </IonTitle>
          </IonToolbar>
        </IonHeader>

      <IonButton  id="open-modal">
Open modal
        </IonButton>

        <IonList>
          {messages.map(m => <MessageListItem key={m.id} message={m} />)}
        </IonList>

        <IonModal ref={modal} trigger="open-modal" presentingElement={presentingElement!}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Modal</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => dismiss()}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding" ref={contentRef}>
            <IonList>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i.pravatar.cc/300?u=b" />
                </IonAvatar>
                <IonLabel position="stacked">
                  <h2>Connor Smith</h2>
                  <p>Sales Rep</p>
                </IonLabel>
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i.pravatar.cc/300?u=a" />
                </IonAvatar>
                <IonLabel position="stacked">
                  <h2>Daniel Smith</h2>
                  <p>Product Designer</p>
                </IonLabel>               
                 <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i.pravatar.cc/300?u=d" />
                </IonAvatar>
                <IonLabel position="stacked">
                  <h2>Greg Smith</h2>
                  <p>Director of Operations</p>
              </IonLabel>
            </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i.pravatar.cc/300?u=e" />
                </IonAvatar>
                <IonLabel position="stacked">
                  <h2>Zoey Smith</h2>
                  <p>CEO</p>
                </IonLabel>                
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i.pravatar.cc/300?u=b" />
                </IonAvatar>
                <IonLabel position="stacked">
                  <h2>Connor Smith</h2>
                  <p>Sales Rep</p>
                </IonLabel>                
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i.pravatar.cc/300?u=a" />
                </IonAvatar>
                <IonLabel position="stacked">
                  <h2>Daniel Smith</h2>
                  <p>Product Designer</p>
                </IonLabel>                
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i.pravatar.cc/300?u=d" />
                </IonAvatar>
                <IonLabel position="stacked">
                  <h2>Greg Smith</h2>
                  <p>Director of Operations</p>
                </IonLabel>                
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i.pravatar.cc/300?u=e" />
                </IonAvatar>
                <IonLabel position="stacked">
                  <h2>Zoey Smith</h2>
                  <p>CEO</p>
                </IonLabel>               
                 <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i.pravatar.cc/300?u=b" />
                </IonAvatar>
                <IonLabel position="stacked">
                  <h2>Connor Smith</h2>
                  <p>Sales Rep</p>
                </IonLabel>                
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i.pravatar.cc/300?u=a" />
                </IonAvatar>
                <IonLabel position="stacked">
                  <h2>Daniel Smith</h2>
                  <p>Product Designer</p>
                </IonLabel>                
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i.pravatar.cc/300?u=d" />
                </IonAvatar>
                <IonLabel position="stacked">
                  <h2>Greg Smith</h2>
                  <p>Director of Operations</p>
                </IonLabel>               
               <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i.pravatar.cc/300?u=e" />
                </IonAvatar>
                <IonLabel position="stacked">
                  <h2>Zoey Smith</h2>
                  <p>CEO</p>
                </IonLabel>               
                 <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i.pravatar.cc/300?u=b" />
                </IonAvatar>
                <IonLabel position="stacked">
                  <h2>Connor Smith</h2>
                  <p>Sales Rep</p>
                </IonLabel>                
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i.pravatar.cc/300?u=a" />
                </IonAvatar>
                <IonLabel position="stacked">
                  <h2>Daniel Smith</h2>
                  <p>Product Designer</p>
                </IonLabel>                
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i.pravatar.cc/300?u=d" />
                </IonAvatar>
                <IonLabel position="stacked">
                  <h2>Greg Smith</h2>
                  <p>Director of Operations</p>
                </IonLabel>                
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i.pravatar.cc/300?u=e" />
                </IonAvatar>
                <IonLabel position="stacked">
                  <h2>Zoey Smith</h2>
                  <p>CEO</p>
                </IonLabel>                
                <IonInput></IonInput>
              </IonItem>
             
            </IonList>
              <IonFooter>
                        <IonToolbar>
          <IonTitle>Footer</IonTitle>
        </IonToolbar>
              </IonFooter>
          </IonContent>
         
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;

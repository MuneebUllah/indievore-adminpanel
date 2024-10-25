import { ChangeEvent, FC, useEffect, useState } from 'react'
import Modal from 'react-modal'
import close from 'assets/images/close.svg'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from 'components/particles/primary-button';
import { useFaqs } from 'containers/setting/CMS/faq/useHook';
import { dispatch } from 'store';
import { setModalClosed } from 'store/user-slice';
import { useSelector } from 'react-redux';

interface AddFAQModelProps {
    id:number
    data:any
}
interface ContentProps {
    question:string,
    answer:any
}


const AddFAQPopup: FC<AddFAQModelProps> = ({ id , data }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [ content , setContent] = useState<ContentProps>({
        question:'',
        answer:''
    })
    const {FaqModalIsOpen} = useSelector((state:any) => state.user)
    const { postFaqs , putFaqs} = useFaqs()
    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedImage(URL.createObjectURL(event.target.files[0]));
        }

    }

    useEffect(() => {
        if (data) {
            setContent({
                question: data?.faq?.question || '',
                answer: data?.faq?.answer || ''
            });
        }
    }, [data]);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            height: '65.6rem',
            width: '86rem',
            borderRadius: '3rem',
        },
    };
    function closeModal() {
        dispatch(setModalClosed('Faq'))
    }

    const handleChange = () => {
        if(id === 0){
        postFaqs(content)
        }
        else{
            putFaqs(id , content)
        }
    }

    return (
        <Modal
            isOpen={FaqModalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <button className='close-button'>
                <img src={close} alt="img" onClick={closeModal} />
            </button>
            <div className='model-container'>

                <div className='popup-title' >
                    <h1>{id === 0 ?'Add FAQ' : 'Edit FAQ'}</h1>
                </div>
                <div className='add-term-condition-container' >
                    <input type="text" placeholder='Write Question here' value={content?.question} onChange={(e) => setContent({ ...content, question: e.target.value })}/>
                    <ReactQuill
                        theme="snow"
                        value={content?.answer}
                        onChange={(value) => setContent({ ...content, answer: value })}
                        className="text-editor"
                    />
                </div>

                <div className='add-button'>
                    <Button title='Save' width="51.2rem" backgroundcolor='var(--primary)' fill='true' onclick={handleChange}/>
                </div>
            </div>
        </Modal>
    )
}

export default AddFAQPopup
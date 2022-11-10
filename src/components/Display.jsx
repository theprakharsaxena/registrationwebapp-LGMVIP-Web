import React, { useState } from 'react'

const Display = () => {

    const [studentList, setStudentList] = useState([])
    const [stName, setStName] = useState('');
    const [stEmail, setStEmail] = useState('');
    const [stWebsite, setStWebsite] = useState('');
    const [stImage, setStImage] = useState('');
    const [stGender, setStGender] = useState('');
    const [stJava, setStJava] = useState('');
    const [stHTML, setStHTML] = useState('');
    const [stCSS, setStCSS] = useState('');

    function clearAll() {
        setStudentList([])
    }

    function clearskills() {
        setStJava('')
        setStHTML('')
        setStCSS('')
    }

    function handleSubmit(e) {
        e.preventDefault();
        let temp = {
            name: stName,
            email: stEmail,
            web: stWebsite,
            image: stImage,
            gender: stGender,
            Java: stJava,
            CSS: stCSS,
            HTML: stHTML
        }
        console.log(temp)
        const updatedList = [...studentList]
        updatedList.push(temp);
        setStudentList(updatedList)
        console.log(updatedList)
        setStName('')
        setStEmail('')
        setStWebsite('')
        setStImage('')
        setStGender('')
        setStJava('')
        setStHTML('')
        setStCSS('')
    }

    return (
        <div className='row mx-5 mt-5 pt-5'>
            <div className='col-6 px-5'>
                <form>
                    <div className='row mb-3'>
                        <label className="col-sm-3 col-form-label" for="StName"><i class="fa-solid fa-user" /> <b>Name</b></label>
                        <div className="col-sm-9">
                            <input
                                type="text"
                                className="form-control"
                                required
                                name='StName'
                                onChange={(e) => setStName(e.target.value)}
                                value={stName} />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label className="col-sm-3 col-form-label" for="StEmail"><i class="fa-solid fa-envelope" /> <b>Email</b></label>
                        <div className="col-sm-9">
                            <input
                                type="email"
                                className="form-control"
                                required
                                name='StEmail'
                                onChange={(e) => setStEmail(e.target.value)}
                                value={stEmail} />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label className="col-sm-3 col-form-label" for="StWebsite"><i class="fa-brands fa-edge" /> <b>Website</b></label>
                        <div className="col-sm-9">
                            <input
                                type="url"
                                className="form-control"
                                required
                                name='StWebsite'
                                onChange={(e) => setStWebsite(e.target.value)}
                                value={stWebsite} />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label className="col-sm-3 col-form-label" for="StImage"><i class="fa-solid fa-image" /> <b>Image Link</b></label>
                        <div className="col-sm-9">
                            <input
                                type="url"
                                className="form-control"
                                required
                                name='StImage'
                                onChange={(e) => setStImage(e.target.value)}
                                value={stImage} />
                        </div>
                    </div>
                    <fieldset className="row mb-3">
                        <legend className="col-form-label col-sm-3 pt-0" for="StGender"><i class="fa-solid fa-venus-mars" /> <b>Gender</b></legend>
                        <div className="col-sm-9">
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="StGender"
                                    checked={stGender === "Male"}
                                    onChange={(e) => setStGender(e.target.value)}
                                    value="Male" />
                                <label className="form-check-label" for="male"><i class="fa-solid fa-mars" /> Male</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="StGender"
                                    checked={stGender === "Female"}
                                    onChange={(e) => setStGender(e.target.value)}
                                    value="Female" />
                                <label className="form-check-label" for="female"><i class="fa-solid fa-venus" /> Female</label>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="row mb-3">
                        <legend className="col-form-label col-sm-3 pt-0" for="StSkills"><i class="fa-solid fa-code" /> <b>Skills</b></legend>
                        <div className="col-sm-9">
                            <div className="form-check form-check-inline">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="StSkills"
                                    checked={stJava === "Java"}
                                    onChange={(e) => setStJava(e.target.value)}
                                    value="Java" />
                                <label className="form-check-label" for="Java"><i class="fa-brands fa-java" /> Java</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="StSkills"
                                    checked={stHTML === "HTML"}
                                    onChange={(e) => setStHTML(e.target.value)}
                                    value="HTML" />
                                <label className="form-check-label" for="HTML"><i class="fa-brands fa-html5" /> HTML</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="StSkills"
                                    checked={stCSS === "CSS"}
                                    onChange={(e) => setStCSS(e.target.value)}
                                    value="CSS" />
                                <label className="form-check-label" for="CSS"><i class="fa-brands fa-css3" /> CSS</label>
                            </div>
                        </div>
                    </fieldset>
                    <button type="button" onClick={clearskills} className="btn btn-warning float-end"><i class="fa-solid fa-circle-xmark"></i> Clear Skills</button>
                    <button type="submit" onClick={handleSubmit} className="btn btn-success"><i class="fa-solid fa-file-pen"></i> Enroll Student</button>
                </form>
            </div>
            <div className='col-6 px-5'>
                <div>
                    <h2 className='text-center mb-3'><i class="fa-solid fa-right-to-bracket" /> Enrolled Students</h2>
                </div>
                <div>
                    <button type="submit" onClick={clearAll} className="btn btn-sm btn-info float-end mb-3"><i class="fa-solid fa-trash" /> Delete All Data</button>
                </div>
                <table className="table table-bordered border-success table-success table-striped">
                    <thead>
                        <tr className='row'>
                            <th className='col-9'><i class="fa-solid fa-circle-info" /> Description</th>
                            <th className='col-3'><i class="fa-solid fa-image" /> Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentList.map((student, index) => {
                                return (
                                    <tr className='row' key={index}>
                                        <td className='col-9'>
                                            <p className='gap-1'>
                                                <i class="fa-solid fa-user" /> {student.name}
                                                <br /><i class="fa-solid fa-venus-mars" /> {student.gender}
                                                <br /><i class="fa-solid fa-envelope" /> {student.email}
                                                <br /><i class="fa-brands fa-edge" /> <a href={student.web}>{student.web}</a>
                                                <br /><i class="fa-solid fa-code" /> {`${student.Java} ${student.HTML} ${student.CSS}`}
                                            </p>
                                        </td>
                                        <td className='col-3'>
                                            <img className='w-100' src={student.image} alt="image1" />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Display
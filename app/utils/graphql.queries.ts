import { gql } from './graphql.server';

export const COURSE_BY_SLUG_QUERY = gql`
	query CourseBySlug($slug: [String]) {
		entry(slug: $slug, section: "courses") {
			id
			slug
			title
			... on courses_course_Entry {
				price
				description
				accessDays
				url
				courseThumbnail {
					id
					url
					... on courses_Asset {
						altText
					}
				}
				includedLessons {
					id
					title
					slug
					segments: children(orderBy: "lft asc") {
						... on lessons_segment_Entry {
							id
							typeHandle
							title
							uri
							slug
							state
						}
						... on lessons_quiz_Entry {
							id
							typeHandle
							title
							uri
							slug
							state
						}
					}
				}
			}
		}
	}
`;

export const LESSON_BY_SLUG_QUERY = gql`
	query Lesson($slug: [String]) {
		entry(slug: $slug, section: "lessons", type: "lesson") {
			id
			title
			slug
			uri
			url
			typeHandle
			... on lessons_lesson_Entry {
				id
				description
				price
				locked
				readingTime
				segments: children(orderBy: "lft asc") {
					... on lessons_segment_Entry {
						id
						typeHandle
						title
						uri
						slug
						state
					}
					... on lessons_quiz_Entry {
						id
						typeHandle
						title
						uri
						slug
					}
				}

				lessonImage {
					id
					url
				}
				embeddedYoutube {
					... on embeddedYoutube_BlockType {
						id
						contentUrl
						embedUrl
						timestamps {
							time
							description
						}
					}
				}

				audio {
					id
					title
					url
				}
			}
		}
	}
`;

export const SEGMENT_BY_SLUG_QUERY = gql`
	query Lesson($slug: [String]) {
		entry(slug: $slug, section: "lessons", type: "segment") {
			id
			... on lessons_segment_Entry {
				id
				typeHandle
				title
				uri
				slug
				state
				description
				readingTime
				state
				lesson: parent {
					id
					title
					slug
				}
				audio {
					id
					title
					url
				}
				embeddedYoutube {
					... on embeddedYoutube_BlockType {
						id
						contentUrl
						embedUrl
						timestamps {
							col1
							time
							col2
							description
						}
					}
				}

				lessonBuilder {
					... on MatrixBlockInterface {
						id
						typeHandle
						... on lessonBuilder_text_BlockType {
							textType
							header
							body
						}
						... on lessonBuilder_file_BlockType {
							fileType
							file {
								id
								url
								... on lessons_Asset {
									altText
								}
							}
							imageTransform
							caption
							overflowedWidth
							imageClass
							imagePosition
						}

						... on lessonBuilder_embed_BlockType {
							header
							instructions
							embed
							caption
							overflowedWidth
						}

						... on lessonBuilder_accordion_BlockType {
							header
							instructions
							termsAndDefinitions {
								... on termsAndDefinitions_BlockType {
									id
									term
									definition
								}
							}
						}
						... on lessonBuilder_dialogCards_BlockType {
							header
							subHeader
							instructions
							description
							dialogCards {
								... on dialogCards_BlockType {
									id
									text
									answer
								}
							}
							flashCards {
								... on flashCards_BlockType {
									id
									front {
										... on front_text_BlockType {
											text
										}

										... on front_image_BlockType {
											image {
												... on lessons_Asset {
													id
													url
													altText
												}
											}
											isFullSize
											caption
										}
									}
									back {
										... on back_text_BlockType {
											text
										}

										... on back_image_BlockType {
											image {
												... on lessons_Asset {
													id
													url
													altText
												}
											}
											isFullSize
											caption
										}
									}
								}
							}
						}
						... on lessonBuilder_imageHotspots_BlockType {
							header
							instructions
							backgroundImage {
								... on lessons_Asset {
									id
									url
									altText
								}
							}
							imageMap
							spots {
								... on spots_BlockType {
									id
									areaName
									coords
									spotContent
								}
							}
						}
						... on lessonBuilder_keyCards_BlockType {
							header
							overflowedWidth
							keyCards {
								... on keyCards_BlockType {
									id
									cardName
									description
								}
							}
						}
						... on lessonBuilder_imageScenes_BlockType {
							header
							instructions
							backgroundImage {
								... on lessons_Asset {
									id
									url
									altText
								}
							}
							scenes {
								... on scenes_BlockType {
									id
									sceneTitle
									sceneHandle
									sceneImage {
										... on lessons_Asset {
											id
											url
											altText
										}
									}
									coords
									parentHandle
									sceneLevel
								}
							}
						}
						... on lessonBuilder_slides_BlockType {
							header
							lessonSlides {
								... on lessonSlides_BlockType {
									id
									slideType
									text
									slideImage {
										... on lessons_Asset {
											id
											url
											altText
										}
									}
								}
							}
						}
						... on lessonBuilder_video_BlockType {
							header
							videoUrl
							completedAtDuration
							showVideoControls
						}
						... on lessonBuilder_hotspotQuiz_BlockType {
							header
							duration
							backgroundImage {
								... on lessons_Asset {
									id
									url
									altText
								}
							}
							questions {
								... on questions_BlockType {
									id
									keyword
									hotspotTitle
									description
									question
									elements
								}
							}
						}
					}
				}
			}
		}
	}
`;

export const ALL_COURSES_QUERY = gql`
	query AllCourses {
		entries(section: "courses") {
			id
			slug
			title
			... on courses_course_Entry {
				price
				description
				accessDays
				url
				courseThumbnail {
					id
					url
					... on courses_Asset {
						altText
					}
				}
			}
		}
	}
`;

export const STUDENT_COURSES = gql`
	query StudentData($id: [QueryArgument]) {
		user(id: $id) {
			... on User {
				userCourses {
					... on MatrixBlockInterface {
						id
						... on userCourses_course_BlockType {
							id
							completed
							course {
								id
								title
								slug
								... on courses_course_Entry {
									price
									description
									accessDays
									url
									courseThumbnail {
										id
										url
										... on courses_Asset {
											altText
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
`;

export const USER_QUERY = gql`
	query User($id: [QueryArgument]) {
		user(id: $id) {
			id
			fullName
		}
	}
`;

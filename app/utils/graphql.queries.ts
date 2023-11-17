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
